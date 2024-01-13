/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import Home from "../screens/home.tsx"
import { Card } from '../components/card.tsx';
import { Details } from '../components/details.tsx';
import {it} from '@jest/globals';
import {render, fireEvent} from "@testing-library/react-native"
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
  
});

let home:any
describe("should render home screen", () =>{
  beforeEach(()=>{
     home = render(<Home/>)
  })
  
  it('render home',() =>{
 
    expect(home).toBeDefined()
   });
})
let card:any

describe("should render cards",()=>{
  beforeEach(()=>{
    let card = render(<Card  largo ={200} ancho={200}
      id={1}
      img={"imgsource"}
      name={"test name"}
      onPress={jest.fn()}/>)
  })
  it('render card',() =>{
    expect(card).toBeDefined()
  })
  
})

let details:any

describe("should render details view",()=>{
  
  it('render details',() => {
    expect(details).toBeDefined()
  })  
  
})

describe('should create and change btn status',() => {
  
  it('define the button' ,() => {
    expect(details.getByTestId('likeBtn')).toBeDefined()
  })
  it('change button status',() => {

    const likeButton = details.getByTestId('likeBtn')
    const initialLikesText = details.getByTestId('likeBtn').props.children;
    fireEvent.press(likeButton);
   const updatedLikesText = details.getByTestId('likeBtn').props.children;
    expect(updatedLikesText).not.toBe(initialLikesText);

  })
})





 