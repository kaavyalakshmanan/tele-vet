import styled from "styled-components";

const Styles = {
    SidebarContainer: styled.div`
        display: flex;
        flex-direction: column;
        align-items: left;
        height: 100vh;
        width: 200px;
        background-color: #252529;
        color: #fff;
        `,

    SidebarMenu: styled.ul`
        display: flex;
        align-items: left;
        flex-direction: column;
        list-style: none;
        width: 100%;
        padding: 0px 30px;
        `,

    SidebarMenuItem: styled.li`
        width: 100%;
        height: 50px;
        &:hover {
            background: rgba(255, 255, 255, 0.05);
            cursor: pointer;
        }
        `,

    SidebarMenuItemLabel: styled.p`
        color: #fff;
        font-size: 14px;
        font-weight: 600;
        line-height: 0;
        text-align: left;
        color: #ffffff;
        padding-left: 5px;
        `,

    Icon: styled.svg`
        width: 20px;
        height: 20px;
        `,
}

export default Styles;