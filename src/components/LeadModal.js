import React from 'react';
import { X, DollarSign, CreditCard, Check, ShoppingBag } from 'lucide-react';

const LeadModal = ({ lead, onClose, onPurchase }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="modal-header">
          <h2 className="modal-title">{lead.id}</h2>
          <p className="modal-subtitle">Lead ID</p>
        </div>

        {/* Eligibility Circle */}
        <div className="eligibility-circle">
          <div className="eligibility-inner">
            <div className="eligibility-percent">{lead.eligibility}%</div>
          </div>
        </div>
        
        <div className="eligibility-label">Eligibility Score</div>
        <div className="eligibility-date">Mar 2026</div>
        <div className="eligibility-rating">Fair</div>

        {/* Lead Details */}
        <div className="modal-details">
          <div className="detail-item">
            <div className="detail-icon">
              <DollarSign size={20} color="#6b7280" />
            </div>
            <div className="detail-content">
              <div className="detail-label">Lead Price</div>
              <div className="detail-value">{lead.price}</div>
            </div>
          </div>

          <div className="detail-item">
            <div className="detail-icon">
              <CreditCard size={20} color="#6b7280" />
            </div>
            <div className="detail-content">
              <div className="detail-label">Applied Amount</div>
              <div className="detail-value">{lead.amount}</div>
            </div>
          </div>
        </div>

        {/* Readiness Indicator */}
        <div className="readiness-indicator">
          <div className="readiness-check">
            <Check size={16} />
          </div>
          <div>
            <strong>Yes</strong>
            <div style={{ fontSize: '12px', color: '#6b7280' }}>Readiness</div>
          </div>
          <div style={{ marginLeft: 'auto', color: '#22c55e', fontWeight: '500' }}>
            Conversion Ready
          </div>
        </div>

        {/* Purchase Button */}
        <button className="purchase-btn" onClick={onPurchase}>
          <ShoppingBag size={20} />
          Purchase Lead
        </button>
      </div>
    </div>
  );
};

export default LeadModal;