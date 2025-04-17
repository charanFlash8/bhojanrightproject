// dashboard.js - Real-Time Dashboard Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize dashboard with empty state
    const dashboardData = {
      totalRaised: 0,
      totalDonors: 0,
      daysActive: 1,
      lastDonation: null,
      donations: []
    };
  
    // DOM Elements
    const progressBar = document.getElementById('fundraising-progress');
    const raisedAmount = document.getElementById('raised-amount');
    const totalDonors = document.getElementById('total-donors');
    const avgDonation = document.getElementById('avg-donation');
    const daysActive = document.getElementById('days-active');
    const lastUpdated = document.getElementById('last-updated');
    const donationTracker = document.getElementById('donation-tracker');
    const refreshBtn = document.getElementById('refresh-btn');
  
    // Format currency
    const formatCurrency = (amount) => {
      return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
      }).format(amount);
    };
  
    // Update dashboard UI
    const updateDashboard = () => {
      // Calculate progress percentage
      const progressPercent = (dashboardData.totalRaised / 10000000) * 100;
      
      // Update UI elements
      progressBar.style.width = `${progressPercent}%`;
      raisedAmount.textContent = `${formatCurrency(dashboardData.totalRaised)} raised so far`;
      totalDonors.textContent = dashboardData.totalDonors;
      avgDonation.textContent = dashboardData.totalDonors > 0 
        ? formatCurrency(dashboardData.totalRaised / dashboardData.totalDonors)
        : '₹0';
      daysActive.textContent = dashboardData.daysActive;
      
      // Update last updated time
      const now = new Date();
      lastUpdated.textContent = now.toLocaleTimeString();
      
      // Update donation tracker if there are donations
      if (dashboardData.donations.length > 0) {
        donationTracker.innerHTML = dashboardData.donations.map(donation => `
          <div class="donation-card">
            <p><strong>${donation.name || 'Anonymous'}</strong> donated ${formatCurrency(donation.amount)}</p>
            <small>${new Date(donation.timestamp).toLocaleString()}</small>
          </div>
        `).join('');
      }
    };
  
    // Simulate receiving a new donation (for demo purposes)
    const simulateDonation = () => {
      const donations = [
        { name: "Rajesh K.", amount: 5000, timestamp: new Date() },
        { name: "Sunita M.", amount: 1000, timestamp: new Date() },
        { name: "TechSolutions Inc.", amount: 50000, timestamp: new Date() }
      ];
      
      const randomDonation = donations[Math.floor(Math.random() * donations.length)];
      
      // Update dashboard data
      dashboardData.totalRaised += randomDonation.amount;
      dashboardData.totalDonors += 1;
      dashboardData.donations.unshift(randomDonation);
      dashboardData.lastDonation = new Date();
      
      // Update UI
      updateDashboard();
    };
  
    // Refresh button functionality
    refreshBtn.addEventListener('click', updateDashboard);
  
    // Initialize empty dashboard
    updateDashboard();
  
    // For demo purposes: Simulate receiving donations every 10 seconds
    // setInterval(simulateDonation, 10000);
  
    // In a real implementation, you would:
    // 1. Connect to your backend API
    // 2. Use WebSockets for real-time updates
    // 3. Fetch latest donation data periodically
  });