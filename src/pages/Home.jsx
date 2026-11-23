import React from 'react';
import '../css/home.css';
import { FaCalendarCheck, FaUsers, FaRocket, FaArrowRight } from 'react-icons/fa';
import { BsCheck2Circle, BsGraphUp } from 'react-icons/bs';

const Home = () => {
  return (
    <div className="home-wrapper">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1>
            Transform Your Events with <span className="highlight">Eventra</span>
          </h1>
          <p>
            The all-in-one platform to create, manage, and analyze unforgettable events with 
            powerful tools designed for organizers who demand excellence.
          </p>
          <div className="hero-actions">
            <a href="/register" className="btn btn-hero">
              Get Started <FaArrowRight className="btn-icon" />
            </a>
            <a href="/demo" className="btn btn-outline">
              Watch Demo
            </a>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">10,000+</span>
              <span className="stat-label">Events Hosted</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">500K+</span>
              <span className="stat-label">Happy Attendees</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">98%</span>
              <span className="stat-label">Satisfaction Rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2>Why Eventra Stands Out</h2>
          
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <FaCalendarCheck />
              </div>
              <h5>Intelligent Scheduling</h5>
              <p>
                Our smart calendar system automatically optimizes event timing based on attendee 
                availability and venue constraints.
              </p>
              <ul className="feature-benefits">
                <li><BsCheck2Circle /> Conflict detection</li>
                <li><BsCheck2Circle /> Auto-reminders</li>
                <li><BsCheck2Circle /> Recurring events</li>
              </ul>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <FaUsers />
              </div>
              <h5>Attendee Management</h5>
              <p>
                Comprehensive tools to track registrations, check-ins, and engagement metrics 
                all in one dashboard.
              </p>
              <ul className="feature-benefits">
                <li><BsCheck2Circle /> Real-time analytics</li>
                <li><BsCheck2Circle /> Custom badges</li>
                <li><BsCheck2Circle /> Feedback collection</li>
              </ul>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <FaRocket />
              </div>
              <h5>Powerful Automation</h5>
              <p>
                Save hours with automated email sequences, payment processing, and post-event 
                follow-ups.
              </p>
              <ul className="feature-benefits">
                <li><BsCheck2Circle /> Template library</li>
                <li><BsCheck2Circle /> Workflow builder</li>
                <li><BsCheck2Circle /> API integrations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <BsGraphUp className="stat-icon" />
              <div className="stat-content">
                <span className="stat-number">3x</span>
                <span className="stat-label">Faster Event Setup</span>
              </div>
            </div>
            <div className="stat-card">
              <BsGraphUp className="stat-icon" />
              <div className="stat-content">
                <span className="stat-number">40%</span>
                <span className="stat-label">More Attendees</span>
              </div>
            </div>
            <div className="stat-card">
              <BsGraphUp className="stat-icon" />
              <div className="stat-content">
                <span className="stat-number">2.5x</span>
                <span className="stat-label">Higher Engagement</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Elevate Your Events?</h2>
          <p>
            Join thousands of event professionals who trust Eventra to deliver exceptional 
            experiences with less effort and better results.
          </p>
          <div className="cta-actions">
            <a href="/register" className="btn btn-cta">
              Start Free Trial
            </a>
            <a href="/contact" className="btn btn-outline-light">
              Contact Sales
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;