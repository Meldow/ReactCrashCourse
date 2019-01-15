import React, {Component} from 'react';

class ApprovalCard extends Component {
    render() {
        return (
            <div>
                <div className="ui card">
                    <div className="content">
                        {this.props.children}
                        <div className="extra content">
                            <div className="ui two buttons">
                                <div className="ui basic green button">
                                    Approve
                                </div>
                                <div className="ui basic red button">
                                    Reject
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ApprovalCard;