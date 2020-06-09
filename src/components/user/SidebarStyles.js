import styled from "styled-components";

export const SidebarContainer = styled.div`
        height: 100vh;
        width: 230px;
        background-color: #252529;
        color: #fff;
        display: flex;
        flex-direction: column;
        font-family: "Roboto", sans-serif;
        `;

export const SidebarMenu = styled.ul`
        display: flex;
        align-items: left;
        flex-direction: column;
        list-style: none;
        width: 100%;
        padding-left: 0px;
        `;

export const MenuLogo = styled.div`
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 16px;
        font-size: 18px;
        line-height: 1.5;
        font-weight: 600;
        height: 50px;
        color: #fff;
        margin: 15px 30px 15px 30px;
        padding-bottom: 20px;
        border-bottom: 1px solid #2e2e33
        `;

export const SidebarMenuItem = styled.li`
        display: flex;
        height: 50px;
        width: 100%;
        align-items: center;
        padding-left: 30px;
        &:hover {
            background: rgba(255, 255, 255, 0.05);
            box-shadow: inset 3px 0 0 0 #ffffff;
            cursor: pointer;
        }
        `;

export const SidebarMenuItemLabel = styled.p`
        font-family: "Open Sans", sans-serif;
        color: #fff;
        font-size: 14px;
        font-weight: 600;
        text-align: left;
        padding-top: 17px;
        margin-left: 20px;
        color: #ffffff;
        vertical-align: center;
        `;

export const Icon = styled.div`
       height: 30px;
       weight: 30px
       `;

export const MenuSignOut = styled.div`
        border-top: 1px solid #2e2e33;
        font-size: 14px;
        line-height: 1.5;
        font-weight: 500;
        height: 45px;
        color: #fff;
        margin: 200px 30px 30px 30px;
        padding: 12px 0px 0px 30px;
        &:hover {
            background: rgba(255, 255, 255, 0.05);
            box-shadow: inset 3px 0 0 0 #ffffff;
            cursor: pointer;
        }
        `;