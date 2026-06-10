import React, { useState } from 'react';
import { 
  Home, 
  Wallet, 
  ShoppingCart, 
  DollarSign, 
  TrendingUp, 
  MessageCircle, 
  Settings, 
  HelpCircle,
  Search,
  User,
  FileText,
  Users,
  CreditCard,
  Check
} from 'lucide-react';
import LeadModal from './LeadModal';
import PurchaseSuccessModal from './PurchaseSuccessModal';

// Main dashboard component for partner portal
const PartnerPortal = () => {
  const [selectedLead, setSelectedLead] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [activeSection, setActiveSection] = useState('business-loan');

  // Sample data - in real app this would come from API
  const mockLeads = [
    { id: 'LeadI#122', amount: '$5,000,000', status: 'New', price: '$754', eligibility: 83, readiness: 'Yes' },
    { id: 'LeadI#123', amount: '$5,000,000', status: 'In Discussion', price: '$654', eligibility: 83, readiness: 'Yes' },
    { id: 'LeadI#120', amount: '$5,000,000', status: 'Purchased', price: '$698', eligibility: 85, readiness: 'Yes' },
    { id: 'LeadI#124', amount: '$5,000,000', status: 'Ready to close', price: '$654', eligibility: 78, readiness: 'No' },
    { id: 'LeadI#125', amount: '$5,000,000', status: 'No response', price: '$654', eligibility: 72, readiness: 'No' },
    { id: 'LeadI#126', amount: '$5,000,000', status: 'Re-engaging', price: '$654', eligibility: 89, readiness: 'Yes' },
    { id: 'LeadI#127', amount: '$5,000,000', status: 'Accepted', price: '$654', eligibility: 91, readiness: 'Yes' },
    { id: 'LeadI#128', amount: '$5,000,000', status: 'Disbursed', price: '$654', eligibility: 88, readiness: 'Yes' },
    { id: 'LeadI#129', amount: '$5,000,000', status: 'Settled', price: '$654', eligibility: 84, readiness: 'Yes' },
    { id: 'LeadI#130', amount: '$5,000,000', status: 'Rejected', price: '$654', eligibility: 65, readiness: 'No' },
    { id: 'LeadI#131', amount: '$5,000,000', status: 'Lapsed', price: '$654', eligibility: 70, readiness: 'No' },
    { id: 'LeadI#132', amount: '$5,000,000', status: 'Contacted', price: '$654', eligibility: 86, readiness: 'Yes' }
  ];

  // Helper function to map status to CSS class
  const getStatusClass = (status) => {
    const statusMap = {
      'New': 'status-new',
      'In Discussion': 'status-in-discussion', 
      'Purchased': 'status-purchased',
      'Ready to close': 'status-ready-to-close',
      'No response': 'status-no-response',
      'Re-engaging': 'status-re-engaging',
      'Accepted': 'status-accepted',
      'Disbursed': 'status-disbursed',
      'Settled': 'status-settled',
      'Rejected': 'status-rejected',
      'Lapsed': 'status-lapsed',
      'Contacted': 'status-contacted'
    };
    return statusMap[status] || 'status-new';
  };

  const handleLeadClick = (lead) => {
    setSelectedLead(lead);
  };

  // Handle successful purchase - close lead modal and show success
  const handlePurchase = () => {
    setSelectedLead(null);
    setShowSuccessModal(true);
  };

  // Dashboard stats - these would be calculated from real data
  const stats = {
    totalLeads: 10,
    approvedLeads: 2, 
    pendingLeads: 2,
    newLeads: 4
  };

  return (
    <div className="portal-container">
      {/* Left sidebar navigation */}
      <div className="sidebar">
        <div className="logo">
          <div className="logo-icon">K</div>
          <span className="logo-text">Partner Portal</span>
        </div>

        <nav>
          <div className="nav-section">
            <div className="nav-section-title">MAIN</div>
            <div 
              className={`nav-item ${activeSection === 'dashboard' ? 'active' : ''}`}
              onClick={() => setActiveSection('dashboard')}
            >
              <Home size={20} />
              <span>Dashboard</span>
            </div>
            <div 
              className={`nav-item ${activeSection === 'wallet' ? 'active' : ''}`}
              onClick={() => setActiveSection('wallet')}
            >
              <Wallet size={20} />
              <span>Wallet</span>
            </div>
            <div 
              className={`nav-item ${activeSection === 'marketplace' ? 'active' : ''}`}
              onClick={() => setActiveSection('marketplace')}
            >
              <ShoppingCart size={20} />
              <span>Marketplace</span>
            </div>
            <div 
              className={`nav-item ${activeSection === 'business-loan' ? 'active' : ''}`}
              onClick={() => setActiveSection('business-loan')}
            >
              <DollarSign size={20} />
              <span>Business Loan</span>
            </div>
            <div 
              className={`nav-item ${activeSection === 'debit-relief' ? 'active' : ''}`}
              onClick={() => setActiveSection('debit-relief')}
            >
              <CreditCard size={20} />
              <span>Debit Relief</span>
            </div>
            <div 
              className={`nav-item ${activeSection === 'insights' ? 'active' : ''}`}
              onClick={() => setActiveSection('insights')}
            >
              <TrendingUp size={20} />
              <span>Insights</span>
            </div>
            <div 
              className={`nav-item ${activeSection === 'chat' ? 'active' : ''}`}
              onClick={() => setActiveSection('chat')}
            >
              <MessageCircle size={20} />
              <span>Chat</span>
            </div>
          </div>

          <div className="nav-section">
            <div className="nav-section-title">OTHERS</div>
            <div 
              className={`nav-item ${activeSection === 'settings' ? 'active' : ''}`}
              onClick={() => setActiveSection('settings')}
            >
              <Settings size={20} />
              <span>Settings</span>
            </div>
            <div 
              className={`nav-item ${activeSection === 'support' ? 'active' : ''}`}
              onClick={() => setActiveSection('support')}
            >
              <HelpCircle size={20} />
              <span>Support</span>
            </div>
          </div>
        </nav>
      </div>

      {/* Main content area */}
      <div className="main-content">
        <div className="header">
          <div>
            <h1 className="page-title">Business Loan</h1>
            <p className="page-subtitle">Browse and evaluate high-quality leads</p>
          </div>
          <div className="user-profile">
            <div className="user-avatar">A</div>
            <span>Arthur</span>
          </div>
        </div>

        {/* Dashboard statistics cards */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon" style={{ backgroundColor: '#f3f4f6' }}>
              <Users size={24} color="#6b7280" />
            </div>
            <div className="stat-number">{stats.totalLeads}</div>
            <div className="stat-label">Total Leads</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon" style={{ backgroundColor: '#fef3c7' }}>
              <Check size={24} color="#92400e" />
            </div>
            <div className="stat-number">{stats.approvedLeads}</div>
            <div className="stat-label">Approved Leads</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon" style={{ backgroundColor: '#fee2e2' }}>
              <FileText size={24} color="#991b1b" />
            </div>
            <div className="stat-number">{stats.pendingLeads}</div>
            <div className="stat-label">Pending Leads</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon" style={{ backgroundColor: '#dbeafe' }}>
              <User size={24} color="#1e40af" />
            </div>
            <div className="stat-number">{stats.newLeads}</div>
            <div className="stat-label">New Leads</div>
          </div>
        </div>

        {/* Search and filter controls */}
        <div className="filters">
          <div style={{ position: 'relative' }}>
            <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#6b7280' }} />
            <input 
              type="text" 
              placeholder="Search..." 
              className="search-input" 
              style={{ paddingLeft: '40px' }}
            />
          </div>
          <select className="filter-select">
            <option>Lead status</option>
            <option>New</option>
            <option>In Discussion</option>
            <option>Purchased</option>
          </select>
          <select className="filter-select">
            <option>Lead type</option>
            <option>Flat</option>
            <option>Hybrid</option>
          </select>
          <select className="filter-select">
            <option>Location</option>
            <option>New York</option>
            <option>California</option>
          </select>
          <select className="filter-select">
            <option>Sort by</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>

        {/* Lead cards grid */}
        <div className="leads-grid">
          {mockLeads.map((lead) => (
            <div key={lead.id} className="lead-card">
              <div className="lead-header">
                <span className="lead-id">{lead.id}</span>
                <span className="lead-price">{lead.price}</span>
              </div>
              <div className="lead-amount">Applied Amount</div>
              <div className="lead-amount-value">{lead.amount}</div>
              <div className={`lead-status ${getStatusClass(lead.status)}`}>
                {lead.status}
              </div>
              <button 
                className="view-lead-btn"
                onClick={() => handleLeadClick(lead)}
              >
                View Lead →
              </button>
            </div>
          ))}
        </div>

        {/* Pagination controls */}
        <div className="pagination">
          <button className="pagination-btn">1</button>
          <button className="pagination-btn active">2</button>
          <button className="pagination-btn">3</button>
          <button className="pagination-btn">4</button>
          <button className="pagination-btn">5</button>
          <span>...</span>
          <button className="pagination-btn">16</button>
          <span style={{ marginLeft: '16px', color: '#6b7280' }}>7 / page</span>
        </div>
      </div>

      {/* Modal overlays */}
      {selectedLead && (
        <LeadModal 
          lead={selectedLead} 
          onClose={() => setSelectedLead(null)}
          onPurchase={handlePurchase}
        />
      )}

      {showSuccessModal && (
        <PurchaseSuccessModal 
          onClose={() => setShowSuccessModal(false)}
        />
      )}
    </div>
  );
};

export default PartnerPortal;