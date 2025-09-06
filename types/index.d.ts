
interface SidebarItemsProps{
  title: string,
  url: string;
  icon: sting,
}


interface NavbarItemsProps{
  title: string,
  href: string,
  description: string,
}

interface Payment {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}