import React from 'react';
import './error-boundary.scss'

class Errorboundary extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
             hasError: false 
            };
      }

      static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
      }
      componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.log(errorInfo)
      }
     

      render() {
        if (this.state.hasError) {
          // You can render any custom fallback UI
          return (
          
          <div className="ErrorImageOverlay">
              <div classname="ErrorImageContainer"  
              style={{backgroundImage:"url('https://i.imgur.com/QUC2CyX.png')"}}></div>
              <div className="ErrorImageText">
                  Sorry this Page is broken
              </div>

          </div>
          )
        }
    
        return this.props.children; 
      }
}
export default Errorboundary;