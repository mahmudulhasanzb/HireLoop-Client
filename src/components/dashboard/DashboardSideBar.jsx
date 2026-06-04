

import { Bell, Envelope, Gear, House, LayoutSideContentLeft, Magnifier, Person} from "@gravity-ui/icons";
import {Button, Drawer} from "@heroui/react";
import { Plus } from "lucide-react";
import Link from "next/link";

export function DashboardSideBar() {
  const navItems = [
    {icon: House, href: '/dshboard/recruiter', label: "Home"},
    {icon: Briefcase, href: '/dashboard/recruiter/jobs', label: "Jobs"},
    {icon: Plus, href: '/dashboard/recruiter/jobs/new', label: "Create A Jobs"},
    {icon: Envelope, href: '/messages', label: "Messages"},
    {icon: Person, href: '/profile', label: "Profile"},
    {icon: Gear, href: '/settings', label: "Settings"},
  ];

  const navContent = (
    <nav className="flex flex-col gap-1">
      {navItems.map(item => (
        <Link
          key={item.label}
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
          type="button"
        >
          <item.icon className="size-5 text-muted" />
          {item.label}
        </Link>
      ))}
    </nav>

  );

  return (
    <>
      <aside className="lg:flex lg:w-64 lg:flex-col lg:bg-surface hidden fixed inset-y-0 left-0 w-64 flex-col shrink-0 border-r border-border">
        {navContent}
      </aside>
      
      <Drawer>
        <Button className="lg:hidden" variant="secondary">
          <LayoutSideContentLeft />
          SideBar
        </Button>
        <Drawer.Backdrop>
          <Drawer.Content placement="left">
            <Drawer.Dialog>
              <Drawer.CloseTrigger />
              <Drawer.Header>
                <Drawer.Heading>Navigation</Drawer.Heading>
              </Drawer.Header>
              <Drawer.Body>
                {navContent}
              </Drawer.Body>
            </Drawer.Dialog>
          </Drawer.Content>
        </Drawer.Backdrop>
      </Drawer>
    </>
  );
}