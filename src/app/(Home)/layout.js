import SideNav from "./Components/SideNav";
import TopNav from "./Components/TopNav";

const layout = ({ children }) => {
  return (
    <div>
      <div className="flex h-full">
        <SideNav></SideNav>
        <div>
          <TopNav />
          {children}
        </div>
      </div>
    </div>
  );
};

export default layout;
