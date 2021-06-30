import React from 'react';
import LeftSidebar from '../LeftSidebar/LeftSidebar';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    height:"100%"
}

const DashBoard = () => {
    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-3">
                    <LeftSidebar></LeftSidebar>
                </div>
                <div className="col-md-9">
                    <h2>This is right sidebar</h2>
                </div>
            </div>
        </section>
    );
};

export default DashBoard;