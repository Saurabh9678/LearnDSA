import React from 'react'
import Description from '../../components/Description/Description'
import IDE from '../../components/IDE/IDE'
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
