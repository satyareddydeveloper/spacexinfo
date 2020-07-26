import React from 'react';
import './styles.css';
import { Launch } from '../Header/Launch/Launch';

export class LaunchList extends React.Component{
    render(){
        return(
            <div className = "launch-list">
            <Launch banner = "https://image.shutterstock.com/image-photo/planets-stars-galaxies-outer-space-260nw-759860248.jpg" 
            title = "dffdlkfj" 
            launchdate = "678" 
            description = "dd"></Launch>
            <Launch banner = "https://image.shutterstock.com/image-photo/planets-stars-galaxies-outer-space-260nw-759860248.jpg" 
            title = "dffdlkfj" 
            launchdate = "678" 
            description = "dd"></Launch>
            <Launch banner = "https://image.shutterstock.com/image-photo/planets-stars-galaxies-outer-space-260nw-759860248.jpg" 
            title = "dffdlkfj" 
            launchdate = "678" 
            description = "dd"></Launch>
            <Launch banner = "https://image.shutterstock.com/image-photo/planets-stars-galaxies-outer-space-260nw-759860248.jpg" 
            title = "dffdlkfj" 
            launchdate = "678" 
            description = "dd"></Launch>
            </div>
        )
    }
}