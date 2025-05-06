
import { useState } from "react";
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

type Lead = {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: string;
  source: string;
  status: "New" | "Contacted" | "Qualified" | "Converted" | "Lost";
  dateAdded: string;
};

const initialLeads: Lead[] = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "(555) 123-4567",
    company: "ABC Corp",
    source: "Lead Magnet",
    status: "New",
    dateAdded: "2025-05-01",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    phone: "(555) 987-6543",
    company: "Johnson & Co",
    source: "Chatbot",
    status: "Contacted",
    dateAdded: "2025-04-28",
  },
  {
    id: 3,
    name: "Michael Chen",
    email: "michael.chen@example.com",
    phone: "(555) 234-5678",
    company: "Chen Enterprises",
    source: "Website Form",
    status: "Qualified",
    dateAdded: "2025-04-25",
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    email: "emily.rodriguez@example.com",
    phone: "(555) 345-6789",
    company: "Rodriguez LLC",
    source: "Lead Magnet",
    status: "Converted",
    dateAdded: "2025-04-20",
  },
  {
    id: 5,
    name: "David Kim",
    email: "david.kim@example.com",
    phone: "(555) 456-7890",
    company: "Kim Industries",
    source: "Referral",
    status: "New",
    dateAdded: "2025-05-02",
  },
  {
    id: 6,
    name: "Jessica Taylor",
    email: "jessica.taylor@example.com",
    phone: "(555) 567-8901",
    company: "Taylor Group",
    source: "Chatbot",
    status: "Lost",
    dateAdded: "2025-04-15",
  },
  {
    id: 7,
    name: "Robert Wilson",
    email: "robert.wilson@example.com",
    phone: "(555) 678-9012",
    company: "Wilson Co",
    source: "Website Form",
    status: "New",
    dateAdded: "2025-05-03",
  },
  {
    id: 8,
    name: "Amanda Martinez",
    email: "amanda.martinez@example.com",
    phone: "(555) 789-0123",
    company: "Martinez Inc",
    source: "Lead Magnet",
    status: "Contacted",
    dateAdded: "2025-04-30",
  },
];

const LeadManagement = () => {
  const [leads, setLeads] = useState<Lead[]>(initialLeads);
  const [filteredLeads, setFilteredLeads] = useState<Lead[]>(initialLeads);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [sourceFilter, setSourceFilter] = useState<string | null>(null);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [isLeadDialogOpen, setIsLeadDialogOpen] = useState(false);
  const [sortField, setSortField] = useState<keyof Lead | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  // Handle searching and filtering
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    filterLeads(query, statusFilter, sourceFilter);
  };

  const handleStatusFilter = (value: string) => {
    const status = value === "All" ? null : value;
    setStatusFilter(status);
    filterLeads(searchQuery, status, sourceFilter);
  };

  const handleSourceFilter = (value: string) => {
    const source = value === "All" ? null : value;
    setSourceFilter(source);
    filterLeads(searchQuery, statusFilter, source);
  };

  const filterLeads = (query: string, status: string | null, source: string | null) => {
    let result = leads;

    if (query) {
      result = result.filter(lead => 
        lead.name.toLowerCase().includes(query) ||
        lead.email.toLowerCase().includes(query) ||
        lead.company.toLowerCase().includes(query)
      );
    }

    if (status) {
      result = result.filter(lead => lead.status === status);
    }

    if (source) {
      result = result.filter(lead => lead.source === source);
    }

    setFilteredLeads(result);
  };

  // Handle sorting
  const handleSort = (field: keyof Lead) => {
    const direction = sortField === field && sortDirection === "asc" ? "desc" : "asc";
    setSortField(field);
    setSortDirection(direction);

    const sorted = [...filteredLeads].sort((a, b) => {
      if (a[field] < b[field]) return direction === "asc" ? -1 : 1;
      if (a[field] > b[field]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setFilteredLeads(sorted);
  };

  // Handle lead status change
  const updateLeadStatus = (id: number, newStatus: Lead["status"]) => {
    const updatedLeads = leads.map(lead =>
      lead.id === id ? { ...lead, status: newStatus } : lead
    );
    
    setLeads(updatedLeads);
    filterLeads(searchQuery, statusFilter, sourceFilter);
    toast.success(`Lead status updated to ${newStatus}`);
  };

  const handleExportCSV = () => {
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
                <TableHead className="cursor-pointer" onClick={() => handleSort("dateAdded")}>
                  <div className="flex items-center">
                    Date Added
                    <ArrowUpDown size={16} className="ml-1" />
                  </div>
                </TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredLeads.length > 0 ? (
                filteredLeads.map((lead) => (
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
                    <TableCell onClick={() => openLeadDetails(lead)}>{new Date(lead.dateAdded).toLocaleDateString()}</TableCell>
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
                        setFilteredLeads(leads);
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
                <p className="text-sm">{new Date(selectedLead.dateAdded).toLocaleDateString()}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
};

export default LeadManagement;
