import { DashboardContainer } from "../../Styles/Dashboard";
import AsideDashboard from "../../Components/Dashboard/AsideDashboard";
import ContentDasboard from "../../Components/Dashboard/ContentDashboard";

const Dashboard = () => {
  return (
  <DashboardContainer>
    <AsideDashboard />
    <ContentDasboard />
  </DashboardContainer>
  );
};

export default Dashboard;
