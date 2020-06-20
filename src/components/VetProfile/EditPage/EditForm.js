import React from "react";
import {connect} from "react-redux";
import Timekeeper from 'react-timekeeper';
import { editVetProfile } from '../../../actions/index';

class EditForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                firstName: "",
                lastName: "",
                username: "",
                businessAddress: "",
                website: "",
                openTimes: {
                    sunday: "",
                    monday: "",
                    tuesday: "",
                    wednesday: "",
                    thursday: "",
                    friday: "",
                    saturday: "",
                    acceptEmergency: false
                }
            }
        }

        handleSubmission = (e) => {
            e.preventDefault();
            this.props.editVetProfile(this.state.profile);
        }
render(){
        return (
            <div>
                <form id="editProfileForm">
                    <div>
                        <p>
                            <h2>Update your profile!</h2>
                        </p>
                    </div>
                    <div className="formGroup">
                        <label>First Name:</label>
                        <input
                            onChange={e => this.state.profile.firstName.setState(e.target.value)}
                        />
                    </div>
                    <div className="formGroup">
                        <label>Last Name:</label>
                        <input
                            onChange={e => this.state.lastName.setState(e.target.value)}
                        />
                    </div>
                    <div className="formGroup">
                        <label>User Name:</label>
                        <input
                            onChange={e => this.state.username.setState(e.target.value)}
                        />
                    </div>
                    <div className="formGroup">
                        <label>Business Address:</label>
                        <input
                            onChange={e => this.state.businessAddress.setState(e.target.value)}
                        />
                        {/*    add https://www.npmjs.com/package/react-geosuggest*/}
                    </div>
                    <div className="formGroup">
                        <label>Website:</label>
                        <input
                            onChange={e => this.state.website.setState(e.target.value)}
                        />
                    </div>
                    <div className="formGroup">
                        <label>Emergency call accepted?</label>
                        <input
                            onChange={e => this.state.acceptEmergency.setState(e.target.value)}
                        />
                    </div>
                    <div className="formGroup">
                        <label>Profile Write-up:</label>
                        <textarea
                            onChange={e => this.state.profile.setState(e.target.value)}
                            cols={10}
                            rows={10}
                        />
                    </div>
                    <h6>Hours of Operation</h6>
                    <div className="formGroup">
                        <label>Sunday</label>
                        <Timekeeper
                            time={e => this.state.openTimes.sunday.setState(e.target.value)}
                        />
                        <label>Monday</label>
                        <Timekeeper
                            time={e => this.state.openTimes.monday.setState(e.target.value)}
                        />
                        <label>Tuesday</label>
                        <Timekeeper
                            time={e => this.state.openTimes.tuesday.setState(e.target.value)}
                        />
                        <label>Wednesday</label>
                        <Timekeeper
                            time={e => this.state.openTimes.wednesday.setState(e.target.value)}
                        />
                        <label>Thursday</label>
                        <Timekeeper
                            time={e => this.state.openTimes.thursday.setState(e.target.value)}
                        />
                        <label>Friday</label>
                        <Timekeeper
                            time={e => this.state.openTimes.friday.setState(e.target.value)}
                        />
                        <label>Saturday</label>
                        <Timekeeper
                            time={e => this.state.openTimes.saturday.setState(e.target.value)}
                        />
                    </div>
                    <button id="submitButton" onClick={e => this.handleSubmission(e)}>Save</button>
                </form>
            </div>
        )
    }
}

export default connect(null, {editVetProfile})(EditForm);


// <!--import GeoSuggest from "react-geosuggest";-->
// <!--&lt;!&ndash;import '../geosuggest.css';&ndash;&gt;-->
// <!--import {GoogleApiWrapper} from "google-maps-react";-->
// <!--import UsersActions from "./actions";-->
// <!--import Form from "react-bootstrap/Form";-->
// <!--import FormLabel from "react-bootstrap/FormLabel";-->
// <!--import Container from "react-bootstrap/Container";-->
// <!--import Button from "react-bootstrap/Button";-->
// <!--import {Map} from 'immutable';-->
// componentWillMount() {
// const {username, location} = this.props.user;
// this.setState({
// profile: Map({username, location})
// });
// }
//
// handleInput = event => {
//     this.setState({
//         profile: this.state.profile.set(event.target.name, event.target.value)
//     });
//
//     if (event.target.name === "username") {
//         this.props.checkIfUsernameExistsEventHandler(event.target.value);
//     }
// };
//
// onSuggestSelect = suggest => {
//     if (suggest) {
// // When the location string is empty, suggest is null
//         this.setState({
//             profile: this.state.profile.set("location", {
//                 location: suggest.location,
//                 label: suggest.label
//             })
//         });
//     }
// };
//
// onSubmit = e => {
// // e.preventDefault();
//
//     this.props.editProfileEventHandler({
//         ...this.state.profile.toJS(),
//         oldUsername: this.props.user.username
//     });
// };
//
// render()
// {
//     return (
//         <Container>
//             <hr/>
//             <h3>Edit ProfilePage</h3>
//             <Form onSubmit={this.onSubmit}>
//                 <FormLabel>Username:</FormLabel>
//                 <Form.Control
//                     type="text"
//                     name="username"
//                     value={this.state.profile.get("username")}
//                     onChange={this.handleInput}
//                 />
//                 {this.props.usernameExists && <p>Username already exists</p>}
//                 <FormLabel>Location: </FormLabel>
//                 <GeoSuggest
//                     ref={el => (this._geoSuggest = el)}
//                     initialValue={this.state.profile.getIn(["location", "label"])}
//                     onSuggestSelect={this.onSuggestSelect}
//                     country="il"
//                 />
//                 <Button variant="primary" type="submit">
//                     Submit
//                 </Button>
//             </Form>
//             <hr/>
//         </Container>
//     );
// }
// }
//
// const mapStateToProps = state => {
//     return {
//         user: state["users"].get("user"),
//         usernameExists: state["users"].get("usernameExists")
//     };
// };
//
// const mapDispatchToProps = dispatch => {
//     return {
//         editProfileEventHandler: user => {
//             dispatch(UsersActions.editProfileAction(user));
//         },
//         checkIfUsernameExistsEventHandler: username => {
//             dispatch(UsersActions.checkIfUsernameExistsAction(username));
//         }
//     };
// };
//
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(
//     GoogleApiWrapper({
//         apiKey: "XXX"
//     })(EditProfile)
// );
//
//
// <!--https://bootsnipp.com/snippets/4Mm5R-->
// <!--https://bootsnipp.com/snippets/1e9Zq-->
//
// <!--<
// link
// href = "//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
// rel = "stylesheet"
// id = "bootstrap-css" > -- >
//     < !--<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js">
//     </script>-- >
//     < !--<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js">
//     </script>-- >
//     < !-- &lt; ! & ndash;
// &
// #45;
// &
// #45;
// &
// #45;
// &
// #45;
// Include
// the
// above in your
// HEAD
// tag & #45;
// &
// #45;
// &
// #45;
// &
// #45;
// &
// #45;
// &
// #45;
// &
// #45;
// &
// #45;
// &
// ndash;
// &gt;
// -- >
//
// < !--
//     <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet"
//           id="bootstrap-css">-->
//
// <!--<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>-->
// <!--<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>-->
// <!--&lt;!&ndash;&#45;&#45;&#45;&#45; Include the above in your HEAD tag &#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&ndash;&gt;-->
//
// <!--<head>-->
// <!--    <title>Bootstrap Example</title>-->
// <!--    <meta charset="utf-8">-->
// <!--    <meta name="viewport" content="width=device-width, initial-scale=1">-->
// <!--    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">-->
// <!--    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>-->
// <!--    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>-->
// <!--</head>-->
//
//
// <!--<hr>-->
// <!--<div class="container bootstrap snippet">-->
// <!--    <div class="row">-->
// <!--        <div class="col-sm-10"><h1>User name</h1></div>-->
// <!--        <div class="col-sm-2"><a href="/users" class="pull-right"><img title="profile image" class="img-circle img-responsive" src="http://www.gravatar.com/avatar/28fd20ccec6865e2d5f0e1f4446eb7bf?s=100"></a></div>-->
// <!--    </div>-->
// <!--    <div class="row">-->
// <!--        <div class="col-sm-3">&lt;!&ndash;left col&ndash;&gt;-->
//
//
// <!--            <div class="text-center">-->
// <!--                <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" class="avatar img-circle img-thumbnail" alt="avatar">-->
// <!--                <h6>Upload a different photo...</h6>-->
// <!--                <input type="file" class="text-center center-block file-upload">-->
// <!--            </div></hr><br>-->
//
//
// <!--            <div class="panel panel-default">-->
// <!--                <div class="panel-heading">Website <i class="fa fa-link fa-1x"></i></div>-->
// <!--                <div class="panel-body"><a href="http://bootnipets.com">bootnipets.com</a></div>-->
// <!--            </div>-->
//
//
// <!--            <ul class="list-group">-->
// <!--                <li class="list-group-item text-muted">Activity <i class="fa fa-dashboard fa-1x"></i></li>-->
// <!--                <li class="list-group-item text-right"><span class="pull-left"><strong>Shares</strong></span> 125</li>-->
// <!--                <li class="list-group-item text-right"><span class="pull-left"><strong>Likes</strong></span> 13</li>-->
// <!--                <li class="list-group-item text-right"><span class="pull-left"><strong>Posts</strong></span> 37</li>-->
// <!--                <li class="list-group-item text-right"><span class="pull-left"><strong>Followers</strong></span> 78</li>-->
// <!--            </ul>-->
//
// <!--            <div class="panel panel-default">-->
// <!--                <div class="panel-heading">Social Media</div>-->
// <!--                <div class="panel-body">-->
// <!--                    <i class="fa fa-facebook fa-2x"></i> <i class="fa fa-github fa-2x"></i> <i class="fa fa-twitter fa-2x"></i> <i class="fa fa-pinterest fa-2x"></i> <i class="fa fa-google-plus fa-2x"></i>-->
// <!--                </div>-->
// <!--            </div>-->
//
// <!--        </div>&lt;!&ndash;/col-3&ndash;&gt;-->
// <!--        <div class="col-sm-9">-->
// <!--            <ul class="nav nav-tabs">-->
// <!--                <li class="active"><a data-toggle="tab" href="#home">Home</a></li>-->
// <!--                <li><a data-toggle="tab" href="#messages">Menu 1</a></li>-->
// <!--                <li><a data-toggle="tab" href="#settings">Menu 2</a></li>-->
// <!--            </ul>-->
//
//
// <!--            <div class="tab-content">-->
// <!--                <div class="tab-pane active" id="home">-->
// <!--                    <hr>-->
// <!--                    <form class="form" action="##" method="post" id="registrationForm">-->
// <!--                        <div class="form-group">-->
//
// <!--                            <div class="col-xs-6">-->
// <!--                                <label for="first_name"><h4>First name</h4></label>-->
// <!--                                <input type="text" class="form-control" name="first_name" id="first_name" placeholder="first name" title="enter your first name if any.">-->
// <!--                            </div>-->
// <!--                        </div>-->
// <!--                        <div class="form-group">-->
//
// <!--                            <div class="col-xs-6">-->
// <!--                                <label for="last_name"><h4>Last name</h4></label>-->
// <!--                                <input type="text" class="form-control" name="last_name" id="last_name" placeholder="last name" title="enter your last name if any.">-->
// <!--                            </div>-->
// <!--                        </div>-->
//
// <!--                        <div class="form-group">-->
//
// <!--                            <div class="col-xs-6">-->
// <!--                                <label for="phone"><h4>Phone</h4></label>-->
// <!--                                <input type="text" class="form-control" name="phone" id="phone" placeholder="enter phone" title="enter your phone number if any.">-->
// <!--                            </div>-->
// <!--                        </div>-->
//
// <!--                        <div class="form-group">-->
// <!--                            <div class="col-xs-6">-->
// <!--                                <label for="mobile"><h4>Mobile</h4></label>-->
// <!--                                <input type="text" class="form-control" name="mobile" id="mobile" placeholder="enter mobile number" title="enter your mobile number if any.">-->
// <!--                            </div>-->
// <!--                        </div>-->
// <!--                        <div class="form-group">-->
//
// <!--                            <div class="col-xs-6">-->
// <!--                                <label for="email"><h4>Email</h4></label>-->
// <!--                                <input type="email" class="form-control" name="email" id="email" placeholder="you@email.com" title="enter your email.">-->
// <!--                            </div>-->
// <!--                        </div>-->
// <!--                        <div class="form-group">-->
//
// <!--                            <div class="col-xs-6">-->
// <!--                                <label for="email"><h4>Location</h4></label>-->
// <!--                                <input type="email" class="form-control" id="location" placeholder="somewhere" title="enter a location">-->
// <!--                            </div>-->
// <!--                        </div>-->
// <!--                        <div class="form-group">-->
//
// <!--                            <div class="col-xs-6">-->
// <!--                                <label for="password"><h4>Password</h4></label>-->
// <!--                                <input type="password" class="form-control" name="password" id="password" placeholder="password" title="enter your password.">-->
// <!--                            </div>-->
// <!--                        </div>-->
// <!--                        <div class="form-group">-->
//
// <!--                            <div class="col-xs-6">-->
// <!--                                <label for="password2"><h4>Verify</h4></label>-->
// <!--                                <input type="password" class="form-control" name="password2" id="password2" placeholder="password2" title="enter your password2.">-->
// <!--                            </div>-->
// <!--                        </div>-->
// <!--                        <div class="form-group">-->
// <!--                            <div class="col-xs-12">-->
// <!--                                <br>-->
// <!--                                <button class="btn btn-lg btn-success" type="submit"><i class="glyphicon glyphicon-ok-sign"></i> Save</button>-->
// <!--                                <button class="btn btn-lg" type="reset"><i class="glyphicon glyphicon-repeat"></i> Reset</button>-->
// <!--                            </div>-->
// <!--                        </div>-->
// <!--                    </form>-->
//
// <!--                    <hr>-->
//
// <!--                </div>&lt;!&ndash;/tab-pane&ndash;&gt;-->
// <!--                <div class="tab-pane" id="messages">-->
//
// <!--                    <h2></h2>-->
//
// <!--                    <hr>-->
// <!--                    <form class="form" action="##" method="post" id="registrationForm">-->
// <!--                        <div class="form-group">-->
//
// <!--                            <div class="col-xs-6">-->
// <!--                                <label for="first_name"><h4>First name</h4></label>-->
// <!--                                <input type="text" class="form-control" name="first_name" id="first_name" placeholder="first name" title="enter your first name if any.">-->
// <!--                            </div>-->
// <!--                        </div>-->
// <!--                        <div class="form-group">-->
//
// <!--                            <div class="col-xs-6">-->
// <!--                                <label for="last_name"><h4>Last name</h4></label>-->
// <!--                                <input type="text" class="form-control" name="last_name" id="last_name" placeholder="last name" title="enter your last name if any.">-->
// <!--                            </div>-->
// <!--                        </div>-->
//
// <!--                        <div class="form-group">-->
//
// <!--                            <div class="col-xs-6">-->
// <!--                                <label for="phone"><h4>Phone</h4></label>-->
// <!--                                <input type="text" class="form-control" name="phone" id="phone" placeholder="enter phone" title="enter your phone number if any.">-->
// <!--                            </div>-->
// <!--                        </div>-->
//
// <!--                        <div class="form-group">-->
// <!--                            <div class="col-xs-6">-->
// <!--                                <label for="mobile"><h4>Mobile</h4></label>-->
// <!--                                <input type="text" class="form-control" name="mobile" id="mobile" placeholder="enter mobile number" title="enter your mobile number if any.">-->
// <!--                            </div>-->
// <!--                        </div>-->
// <!--                        <div class="form-group">-->
//
// <!--                            <div class="col-xs-6">-->
// <!--                                <label for="email"><h4>Email</h4></label>-->
// <!--                                <input type="email" class="form-control" name="email" id="email" placeholder="you@email.com" title="enter your email.">-->
// <!--                            </div>-->
// <!--                        </div>-->
// <!--                        <div class="form-group">-->
//
// <!--                            <div class="col-xs-6">-->
// <!--                                <label for="email"><h4>Location</h4></label>-->
// <!--                                <input type="email" class="form-control" id="location" placeholder="somewhere" title="enter a location">-->
// <!--                            </div>-->
// <!--                        </div>-->
// <!--                        <div class="form-group">-->
//
// <!--                            <div class="col-xs-6">-->
// <!--                                <label for="password"><h4>Password</h4></label>-->
// <!--                                <input type="password" class="form-control" name="password" id="password" placeholder="password" title="enter your password.">-->
// <!--                            </div>-->
// <!--                        </div>-->
// <!--                        <div class="form-group">-->
//
// <!--                            <div class="col-xs-6">-->
// <!--                                <label for="password2"><h4>Verify</h4></label>-->
// <!--                                <input type="password" class="form-control" name="password2" id="password2" placeholder="password2" title="enter your password2.">-->
// <!--                            </div>-->
// <!--                        </div>-->
// <!--                        <div class="form-group">-->
// <!--                            <div class="col-xs-12">-->
// <!--                                <br>-->
// <!--                                <button class="btn btn-lg btn-success" type="submit"><i class="glyphicon glyphicon-ok-sign"></i> Save</button>-->
// <!--                                <button class="btn btn-lg" type="reset"><i class="glyphicon glyphicon-repeat"></i> Reset</button>-->
// <!--                            </div>-->
// <!--                        </div>-->
// <!--                    </form>-->
//
// <!--                </div>&lt;!&ndash;/tab-pane&ndash;&gt;-->
// <!--                <div class="tab-pane" id="settings">-->
//
//
// <!--                    <hr>-->
// <!--                    <form class="form" action="##" method="post" id="registrationForm">-->
// <!--                        <div class="form-group">-->
//
// <!--                            <div class="col-xs-6">-->
// <!--                                <label for="first_name"><h4>First name</h4></label>-->
// <!--                                <input type="text" class="form-control" name="first_name" id="first_name" placeholder="first name" title="enter your first name if any.">-->
// <!--                            </div>-->
// <!--                        </div>-->
// <!--                        <div class="form-group">-->
//
// <!--                            <div class="col-xs-6">-->
// <!--                                <label for="last_name"><h4>Last name</h4></label>-->
// <!--                                <input type="text" class="form-control" name="last_name" id="last_name" placeholder="last name" title="enter your last name if any.">-->
// <!--                            </div>-->
// <!--                        </div>-->
//
// <!--                        <div class="form-group">-->
//
// <!--                            <div class="col-xs-6">-->
// <!--                                <label for="phone"><h4>Phone</h4></label>-->
// <!--                                <input type="text" class="form-control" name="phone" id="phone" placeholder="enter phone" title="enter your phone number if any.">-->
// <!--                            </div>-->
// <!--                        </div>-->
//
// <!--                        <div class="form-group">-->
// <!--                            <div class="col-xs-6">-->
// <!--                                <label for="mobile"><h4>Mobile</h4></label>-->
// <!--                                <input type="text" class="form-control" name="mobile" id="mobile" placeholder="enter mobile number" title="enter your mobile number if any.">-->
// <!--                            </div>-->
// <!--                        </div>-->
// <!--                        <div class="form-group">-->
//
// <!--                            <div class="col-xs-6">-->
// <!--                                <label for="email"><h4>Email</h4></label>-->
// <!--                                <input type="email" class="form-control" name="email" id="email" placeholder="you@email.com" title="enter your email.">-->
// <!--                            </div>-->
// <!--                        </div>-->
// <!--                        <div class="form-group">-->
//
// <!--                            <div class="col-xs-6">-->
// <!--                                <label for="email"><h4>Location</h4></label>-->
// <!--                                <input type="email" class="form-control" id="location" placeholder="somewhere" title="enter a location">-->
// <!--                            </div>-->
// <!--                        </div>-->
// <!--                        <div class="form-group">-->
//
// <!--                            <div class="col-xs-6">-->
// <!--                                <label for="password"><h4>Password</h4></label>-->
// <!--                                <input type="password" class="form-control" name="password" id="password" placeholder="password" title="enter your password.">-->
// <!--                            </div>-->
// <!--                        </div>-->
// <!--                        <div class="form-group">-->
//
// <!--                            <div class="col-xs-6">-->
// <!--                                <label for="password2"><h4>Verify</h4></label>-->
// <!--                                <input type="password" class="form-control" name="password2" id="password2" placeholder="password2" title="enter your password2.">-->
// <!--                            </div>-->
// <!--                        </div>-->
// <!--                        <div class="form-group">-->
// <!--                            <div class="col-xs-12">-->
// <!--                                <br>-->
// <!--                                <button class="btn btn-lg btn-success pull-right" type="submit"><i class="glyphicon glyphicon-ok-sign"></i> Save</button>-->
// <!--                                &lt;!&ndash;<button class="btn btn-lg" type="reset"><i class="glyphicon glyphicon-repeat"></i> Reset</button>&ndash;&gt;-->
// <!--                            </div>-->
// <!--                        </div>-->
// <!--                    </form>-->
// <!--                </div>-->
//
// <!--            </div>&lt;!&ndash;/tab-pane&ndash;&gt;-->
// <!--        </div>&lt;!&ndash;/tab-content&ndash;&gt;-->
//
// <!--    </div>&lt;!&ndash;/col-9&ndash;&gt;-->
// <!--</div>&lt;!&ndash;/row&ndash;&gt;-->
