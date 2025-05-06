
import { useState, useEffect } from "react";
import AdminLayout from "@/components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Search, MoreHorizontal, Download, ArrowUpDown } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

type Lead = {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: string;
  source: string;
  status: "New" | "Contacted" | "Qualified" | "Converted" | "Lost";
  date_added: string;
};

const LeadManagement = () => {
  const queryClient = useQueryClient();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [sourceFilter, setSourceFilter] = useState<string | null>(null);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [isLeadDialogOpen, setIsLeadDialogOpen] = useState(false);
  const [sortField, setSortField] = useState<keyof Lead | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  // Fetch leads from Supabase
  const { data: leads = [], isLoading } = useQuery({
    queryKey: ['leads'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('leads')
        .select('*')
        .order('date_added', { ascending: false });
      
      if (error) throw error;
      return data as Lead[];
    }
  });

  // Update lead status mutation
  const updateLeadStatusMutation = useMutation({
    mutationFn: async ({ id, status }: { id: number, status: Lead["status"] }) => {
      const { error } = await supabase
        .from('leads')
        .update({ status })
        .eq('id', id);
      
      if (error) throw error;
      return { id, status };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['leads'] });
      toast.success("Lead status updated successfully");
    },
    onError: (error) => {
      console.error("Error updating lead:", error);
      toast.error("Failed to update lead status");
    }
  });

  // Apply filters to leads
  const filteredLeads = leads.filter(lead => {
    let matchesSearch = true;
    let matchesStatus = true;
    let matchesSource = true;

    if (searchQuery) {
      matchesSearch = 
        lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lead.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lead.company.toLowerCase().includes(searchQuery.toLowerCase());
    }

    if (statusFilter) {
      matchesStatus = lead.status === statusFilter;
    }

    if (sourceFilter) {
      matchesSource = lead.source === sourceFilter;
    }

    return matchesSearch && matchesStatus && matchesSource;
  });

  // Sort leads
  const sortedLeads = sortField 
    ? [...filteredLeads].sort((a, b) => {
        if (a[sortField] < b[sortField]) return sortDirection === "asc" ? -1 : 1;
        if (a[sortField] > b[sortField]) return sortDirection === "asc" ? 1 : -1;
        return 0;
      })
    : filteredLeads;

  // Handle sorting
  const handleSort = (field: keyof Lead) => {
    const direction = sortField === field && sortDirection === "asc" ? "desc" : "asc";
    setSortField(field);
    setSortDirection(direction);
  };

  // Handle search and filters
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleStatusFilter = (value: string) => {
    const status = value === "All" ? null : value;
    setStatusFilter(status);
  };

  const handleSourceFilter = (value: string) => {
    const source = value === "All" ? null : value;
    setSourceFilter(source);
  };

  // Update lead status
  const updateLeadStatus = (id: number, newStatus: Lead["status"]) => {
    updateLeadStatusMutation.mutate({ id, status: newStatus });
  };

  const handleExportCSV = () => {
    // Generate CSV data from sortedLeads
    const headers = ["Name", "Email", "Phone", "Company", "Source", "Status", "Date Added"];
    const csvData = sortedLeads.map(lead => [
      lead.name,
      lead.email,
      lead.phone,
      lead.company,
      lead.source,
      lead.status,
      new Date(lead.date_added).toLocaleDateString()
    ]);
    
    // Create CSV content
    const csvContent = [
      headers.join(','),
      ...csvData.map(row => row.join(','))
    ].join('\n');
    
    // Create download link
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `leads-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success("Leads exported to CSV");
  };

  const openLeadDetails = (lead: Lead) => {
    setSelectedLead(lead);
    setIsLeadDialogOpen(true);
  };

  const getStatusColor = (status: Lead["status"]) => {
    switch (status) {
      case "New": return "bg-blue-100 text-blue-800";
      case "Contacted": return "bg-yellow-100 text-yellow-800";
      case "Qualified": return "bg-purple-100 text-purple-800";
      case "Converted": return "bg-green-100 text-green-800";
      case "Lost": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <AdminLayout title="Lead Management">
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
          <div className="w-full md:w-1/3 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search leads..."
              value={searchQuery}
              onChange={handleSearch}
              className="pl-9"
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Select onValueChange={handleStatusFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Statuses</SelectItem>
                <SelectItem value="New">New</SelectItem>
                <SelectItem value="Contacted">Contacted</SelectItem>
                <SelectItem value="Qualified">Qualified</SelectItem>
                <SelectItem value="Converted">Converted</SelectItem>
                <SelectItem value="Lost">Lost</SelectItem>
              </SelectContent>
            </Select>
            
            <Select onValueChange={handleSourceFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by source" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Sources</SelectItem>
                <SelectItem value="Lead Magnet">Lead Magnet</SelectItem>
                <SelectItem value="Chatbot">Chatbot</SelectItem>
                <SelectItem value="Website Form">Website Form</SelectItem>
                <SelectItem value="Referral">Referral</SelectItem>
              </SelectContent>
            </Select>
            
            <Button variant="outline" onClick={handleExportCSV}>
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px] cursor-pointer" onClick={() => handleSort("name")}>
                  <div className="flex items-center">
                    Name
                    <ArrowUpDown size={16} className="ml-1" />
                  </div>
                </TableHead>
                <TableHead className="cursor-pointer" onClick={() => handleSort("email")}>
                  <div className="flex items-center">
                    Email
                    <ArrowUpDown size={16} className="ml-1" />
                  </div>
                </TableHead>
                <TableHead>Company</TableHead>
                <TableHead className="cursor-pointer" onClick={() => handleSort("source")}>
                  <div className="flex items-center">
                    Source
                    <ArrowUpDown size={16} className="ml-1" />
                  </div>
                </TableHead>
                <TableHead className="cursor-pointer" onClick={() => handleSort("status")}>
                  <div className="flex items-center">
                    Status
                    <ArrowUpDown size={16} className="ml-1" />
                  </div>
                </TableHead>
                <TableHead className="cursor-pointer" onClick={() => handleSort("date_added")}>
                  <div className="flex items-center">
                    Date Added
                    <ArrowUpDown size={16} className="ml-1" />
                  </div>
                </TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-10">
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                    </div>
                  </TableCell>
                </TableRow>
              ) : sortedLeads.length > 0 ? (
                sortedLeads.map((lead) => (
                  <TableRow key={lead.id} className="cursor-pointer hover:bg-muted/50">
                    <TableCell className="font-medium" onClick={() => openLeadDetails(lead)}>{lead.name}</TableCell>
                    <TableCell onClick={() => openLeadDetails(lead)}>{lead.email}</TableCell>
                    <TableCell onClick={() => openLeadDetails(lead)}>{lead.company}</TableCell>
                    <TableCell onClick={() => openLeadDetails(lead)}>{lead.source}</TableCell>
                    <TableCell onClick={() => openLeadDetails(lead)}>
                      <Badge variant="outline" className={getStatusColor(lead.status)}>
                        {lead.status}
                      </Badge>
                    </TableCell>
                    <TableCell onClick={() => openLeadDetails(lead)}>{new Date(lead.date_added).toLocaleDateString()}</TableCell>
                    <TableCell className="text-right">
                      <Select
                        onValueChange={(value) => updateLeadStatus(lead.id, value as Lead["status"])}
                        defaultValue={lead.status}
                      >
                        <SelectTrigger className="w-[130px]">
                          <SelectValue placeholder="Change status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="New">New</SelectItem>
                          <SelectItem value="Contacted">Contacted</SelectItem>
                          <SelectItem value="Qualified">Qualified</SelectItem>
                          <SelectItem value="Converted">Converted</SelectItem>
                          <SelectItem value="Lost">Lost</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-10">
                    <p className="text-muted-foreground">No leads found matching your criteria</p>
                    <Button 
                      variant="outline" 
                      className="mt-4"
                      onClick={() => {
                        setSearchQuery("");
                        setStatusFilter(null);
                        setSourceFilter(null);
                      }}
                    >
                      Reset Filters
                    </Button>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Lead Details Dialog */}
      <Dialog open={isLeadDialogOpen} onOpenChange={setIsLeadDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Lead Details</DialogTitle>
          </DialogHeader>
          {selectedLead && (
            <div className="space-y-4 py-4">
              <div className="space-y-1">
                <p className="text-sm font-medium">Name</p>
                <p className="text-sm">{selectedLead.name}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">Email</p>
                <p className="text-sm">{selectedLead.email}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">Phone</p>
                <p className="text-sm">{selectedLead.phone}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">Company</p>
                <p className="text-sm">{selectedLead.company}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">Source</p>
                <p className="text-sm">{selectedLead.source}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">Status</p>
                <Badge variant="outline" className={getStatusColor(selectedLead.status)}>
                  {selectedLead.status}
                </Badge>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">Date Added</p>
                <p className="text-sm">{new Date(selectedLead.date_added).toLocaleDateString()}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
};

export default LeadManagement;
