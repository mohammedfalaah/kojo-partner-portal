import React from 'react';
import { X, Check, FileText, Wallet, MessageCircle } from 'lucide-react';

const PurchaseSuccessModal = ({ onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>

        {/* Success Icon */}
        <div className="success-icon">
          <Check size={32} />
        </div>

        <div className="modal-header">
          <h2 className="modal-title">Lead Purchased Successfully</h2>
          <p className="modal-subtitle" style={{ fontSize: '16px', marginBottom: '8px' }}>
            You now have access to Lead #123.
          </p>
          <p className="modal-subtitle">
            Start a conversation to move them forward.
          </p>
        </div>

        {/* Transaction Receipt */}
        <div className="transaction-section">
          <div className="section-title">
            <FileText size={16} />
            Transaction Receipt
          </div>
          <div className="transaction-row">
            <span className="transaction-label">Transaction ID</span>
            <span className="transaction-value">TXN-2026-0042</span>
          </div>
          <div className="transaction-row">
            <span className="transaction-label">Lead ID</span>
            <span className="transaction-value">LEAD-006</span>
          </div>
          <div className="transaction-row">
            <span className="transaction-label">Lead Type</span>
            <span className="transaction-value">Flat</span>
          </div>
          <div className="transaction-row">
            <span className="transaction-label">Payment Method</span>
            <span className="transaction-value">Autopay</span>
          </div>
          <div className="transaction-row">
            <span className="transaction-label">Amount Charged</span>
            <span className="transaction-value">-$75.00</span>
          </div>
        </div>

        {/* Wallet Update Preview */}
        <div className="transaction-section">
          <div className="section-title">
            <Wallet size={16} />
            Wallet Update Preview
          </div>
          <div className="balance-grid">
            <div className="balance-item">
              <div className="balance-icon">
                <Wallet size={20} color="#6b7280" />
              </div>
              <div className="balance-content">
                <div className="balance-label">Current Balance</div>
                <div className="balance-amount">$4,250.00</div>
              </div>
            </div>
            <div className="balance-item">
              <div className="balance-icon">
                <Wallet size={20} color="#6b7280" />
              </div>
              <div className="balance-content">
                <div className="balance-label">New Balance</div>
                <div className="balance-amount">$4,172.00</div>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Prompt */}
        <div className="chat-prompt">
          <div className="chat-icon">
            <MessageCircle size={20} />
          </div>
          <div className="chat-content">
            <h3>James John is ready to chat!</h3>
            <p>Start a conversation now to move this lead forward.</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="modal-actions">
          <button className="secondary-btn" onClick={onClose}>
            Go to Lead Details →
          </button>
          <button className="primary-btn" onClick={onClose}>
            Start Chat with James John
          </button>
        </div>
      </div>
    </div>
  );
};

export default PurchaseSuccessModal;