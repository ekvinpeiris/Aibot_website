
import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Session, User } from '@supabase/supabase-js';
import { toast } from "sonner";

type AuthContextType = {
  session: Session | null;
  user: User | null;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  loading: boolean;
  isAdmin: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const fetchSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      
      if (error) {
        console.error('Error fetching session:', error);
        return;
      }
      
      setSession(data.session);
      setUser(data.session?.user ?? null);
      
      // Check if user is admin (you'll need to customize this based on your Supabase setup)
      if (data.session?.user) {
        const { data: userData } = await supabase
          .from('admin_users')
          .select('is_admin')
          .eq('id', data.session.user.id)
          .single();
          
        setIsAdmin(!!userData?.is_admin);
      }
      
      setLoading(false);
    };

    fetchSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        if (session?.user) {
          const { data: userData } = await supabase
            .from('admin_users')
            .select('is_admin')
            .eq('id', session.user.id)
            .single();
            
          setIsAdmin(!!userData?.is_admin);
        } else {
          setIsAdmin(false);
        }
        
        setLoading(false);
      }
    );

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      toast.success("Successfully signed in!");
    } catch (error: any) {
      toast.error(error.message || "Error signing in");
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
      toast.success("Successfully signed out");
    } catch (error: any) {
      toast.error(error.message || "Error signing out");
    }
  };

  return (
    <AuthContext.Provider value={{ session, user, signIn, signOut, loading, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
