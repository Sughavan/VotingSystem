import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './Vote.css';

const VotingPage = () => {
  const { state: voterDetails } = useLocation();
  const [candidates, setCandidates] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState('');
  const [voteConfirmed, setVoteConfirmed] = useState(false);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/vote'); // This should now match your backend route
        setCandidates(response.data);
      } catch (error) {
        console.error('Error fetching the candidates data', error);
      }
    };
  
    fetchCandidates();
  }, []);
  

  useEffect(() => {
    const voteStatus = localStorage.getItem(`voted-${voterDetails.voterId}`);
    if (voteStatus) {
      setVoteConfirmed(true);
    }
  }, [voterDetails.voterId]);

  const handleVoteChange = (e) => {
    setSelectedCandidate(e.target.value);
  };

  const handleVoteConfirmation = () => {
    if (selectedCandidate) {
      setVoteConfirmed(true);
      localStorage.setItem(`voted-${voterDetails.voterId}`, true);
    }
  };

  return (
    <div className="voting-page">
      <div className="voter-details">
        <h2>Voter Details</h2>
        <p><strong>First Name:</strong> {voterDetails.firstName}</p>
        <p><strong>Middle Name:</strong> {voterDetails.middleName}</p>
        <p><strong>Last Name:</strong> {voterDetails.lastName}</p>
        <p><strong>Date of Birth:</strong> {voterDetails.dob}</p>
        <p><strong>Address:</strong> {voterDetails.address}</p>
        <p><strong>Number:</strong> {voterDetails.phoneNumber}</p>
        <p><strong>Aadhar Number:</strong> {voterDetails.aadhar}</p>
        <p><strong>Voter's Id:</strong> {voterDetails.voterId}</p>
      </div>
      <div className="voting-section">
        <h2>Vote for Your Candidate</h2>
        {candidates.map(candidate => (
          <div key={candidate.id} className="candidate-option">
            <input 
              type="radio" 
              id={candidate.id} 
              name="candidate" 
              value={candidate.name} 
              onChange={handleVoteChange} 
              disabled={voteConfirmed}
            />
            <label htmlFor={candidate.id}>
              <img src={candidate.symbol} alt="" className="party-symbol" />
              {candidate.name}
            </label>
          </div>
        ))}
        <button 
          onClick={handleVoteConfirmation} 
          disabled={!selectedCandidate || voteConfirmed}
          className="vote-button"
        >
          {voteConfirmed ? 'Vote Confirmed' : 'Confirm Vote'}
        </button>
        {voteConfirmed && <p className="vote-count">Your vote has been recorded for {selectedCandidate}</p>}
      </div>
    </div>
  );
};

export default VotingPage;
