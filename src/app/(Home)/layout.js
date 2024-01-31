import SideNav from "./Components/SideNav";
import TopNav from "./Components/TopNav";

const layout = ({ children }) => {
  return (
    <div className="bg-[#E8F0F5] containering w-full">
      <div className="flex h-full">
        <SideNav></SideNav>
        <div className="mt-[40px] me-[40px] w-full">
          <TopNav />
          {children}
        </div>
      </div>
    </div>
  );
};

export default layout;
