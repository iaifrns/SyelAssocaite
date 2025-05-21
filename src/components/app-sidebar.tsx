 
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from "../components/ui/sidebar"
import { menuList } from "../constants/menu"

const AppSidebar = () => {
    return (
      <Sidebar side="right">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {menuList.map((item) => (
                  <SidebarMenuItem key={item.menu}>
                    <SidebarMenuButton asChild>
                      <a href={item.link}>
                        <span>{item.menu}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    )
  }

  export default AppSidebar
