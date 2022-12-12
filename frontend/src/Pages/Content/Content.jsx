import React from 'react'
import Description from '../../components/Description/Description'
import IDE from '../../components/IDE/IDE'
import '../Content/Content.css'
const Content = () => {
    return (
        <div>
        <div className="MainContainer">
          {/* <Header /> */}
          <div className="Container">
            <Description />
            <IDE />
          </div>
        </div>
      </div>
    );
}

export default Content
