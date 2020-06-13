import React from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const getUsernameAndEmail = ( collapsed, userName, email ) => {
    return collapsed ? null : (
        <>
            <div style={{ paddingBottom: 16 }} />
            <Typography variant={"h6"} noWrap>
                { userName }
            </Typography>
            <Typography color={"textSecondary"} noWrap gutterBottom>
                { email }
            </Typography>
        </>
    );
}

const NavHeader = ({ collapsed, src="/resources/mock-avatar.jpg", target="/user/profile", userName, email } ) => (
    <>
        <div style={{ padding: collapsed ? 8 : 16, transition: "0.3s" }}>
            <a href={ target }>
                <Avatar
                    style={{
                        width: collapsed ? 40 : 80,
                        height: collapsed ? 40 : 80,
                        transition: "0.3s"
                    }}
                    src={ src }
                />
            </a>
            { getUsernameAndEmail(collapsed, userName, email) }
        </div>
        <Divider />
    </>
);

NavHeader.propTypes = {
    collapsed: PropTypes.bool
};
NavHeader.defaultProps = {
    collapsed: false
};

export default NavHeader;