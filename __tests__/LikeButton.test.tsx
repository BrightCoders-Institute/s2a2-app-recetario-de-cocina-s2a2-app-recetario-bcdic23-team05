import LikeButton from '../components/likebutton';
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';


describe('LikeButton Component', () => {
    it('renders correctly', () => {
      const { getByTestId } = render(<LikeButton />);
      const likeButton = getByTestId('likeBtn');
      expect(likeButton).toBeTruthy();
    });
  
    it('increments likes on button press', () => {
      const { getByTestId, getByText } = render(<LikeButton />);
      const likeButton = getByTestId('likeBtn');
  
      fireEvent.press(likeButton);
  
      const updatedLikes = getByText(/1 Like/); // Assuming initial likes are 0
      expect(updatedLikes).toBeTruthy();
    });
  });