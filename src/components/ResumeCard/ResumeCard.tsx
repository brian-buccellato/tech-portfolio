import { Card } from "@mui/joy";
import { CardContent } from "@mui/joy";
import { Typography } from "@mui/joy";
import { List, ListItem, ListItemIcon } from "@mui/material";
import {
  PaletteOutlined,
  LocalHospitalOutlined,
  FlightTakeoffOutlined,
  AccountBalanceOutlined,
  MilitaryTechOutlined,
  NewspaperOutlined,
  InsightsOutlined,
  SavingsOutlined,
  PieChartOutlineOutlined,
} from "@mui/icons-material";

export default function ResumeCard() {
  return (
    <Card>
      <CardContent>
        <Typography level="title-lg" sx={{ display: 'flex', fontWeight: 700, textAlign: 'left' }}>Experience</Typography>
        <Typography sx={{ display: 'flex', textAlign: 'left' }}>
          Senior Software Engineer:
          <span style={{ display: 'flex', paddingLeft: '5px', textAlign: 'left' }}>Elephant Ventures, LLC</span>
        </Typography>
        <Typography sx={{ display: 'flex' }}>July 2017 - Present</Typography>
        <Typography level="body-sm" sx={{ display: 'flex', fontWeight: 300, textAlign: 'left' }}>
          Headed a team of engineers in day-to-day tasks, empowered career growth via targeted trainings,
          and attained improved performance and retention rates. Played a pivotal role in evaluating and
          recommending cutting-edge technologies, aimed at enhancing operational efficiency and driving
          competitive results in a rapidly evolving industry.
        </Typography>
        <Typography level="body-md" sx={{ display: 'flex' }}>Highlighted Projects</Typography>
        <List>
          <ListItem dense>
            <ListItemIcon>
              <NewspaperOutlined sx={{ color: "#3b6be3" }} />
            </ListItemIcon>
            <Typography level="body-sm">
              <Typography sx={{fontWeight: "600"}}>News organization:</Typography>
              <List sx={{ listStyleType: "disc", listStylePosition: "inside" }}>
                <ListItem sx={{ display: "list-item" }}>Accelerated project workflows 20% and fine-tuned process bottlenecks by advising directors on agile-driven process improvements.</ListItem>
                <ListItem sx={{ display: "list-item" }}>Steered all aspects of new ETL pipeline development via Python and SQL to systematize the data flow of critical analytics.</ListItem>
                <ListItem sx={{ display: "list-item" }}>Boosted data accessibility and improved query performance by optimizing Redshift data warehouse schema design.</ListItem>
                <ListItem sx={{ display: "list-item" }}>Eliminated manual email listing by researching modern tech solutions and automating user grouping via Segment and Sailthru.</ListItem>
              </List>
            </Typography>
          </ListItem>
          <ListItem dense>
            <ListItemIcon>
              <PaletteOutlined sx={{ color: "#141414" }} />
            </ListItemIcon>
            <Typography level="body-sm">
              <Typography sx={{fontWeight: "600"}}>Art Investment Platform:</Typography>
              <List sx={{ listStyleType: "disc", listStylePosition: "inside" }}>
                <ListItem sx={{ display: "list-item" }}>Created and managed a library of batch ETL jobs to enhance reporting capabilities for the marketing team.</ListItem>
                <ListItem sx={{ display: "list-item" }}>Prioritized data integrity checks throughout pipelines that expedited issue resolution and delivery of essential reporting.</ListItem>
                <ListItem sx={{ display: "list-item" }}>Supervised the entire execution of tailored marketing strategies from inception to completion that broadened brand visibility.</ListItem>
              </List>
            </Typography>
          </ListItem>
          <ListItem dense>
            <ListItemIcon>
              <LocalHospitalOutlined sx={{ color: "#051c2c" }} />
            </ListItemIcon>
            <Typography level="body-sm">
              <Typography sx={{fontWeight: "600"}}>Healthcare Data Platform:</Typography>
              <List sx={{ listStyleType: "disc", listStylePosition: "inside" }}>
                <ListItem sx={{ display: "list-item" }}>Architected a data integrity verification application that cut out job failures from corrupt schemas and saved hundreds of hours.</ListItem>
                <ListItem sx={{ display: "list-item" }}>Built a tool to generate a "slice" of the development database that sped-up development and testing processes.</ListItem>
                <ListItem sx={{ display: "list-item" }}>Operationalized Machine Learning models through ETL pipeline development, improving data utilization for decision-making.</ListItem>
              </List>
            </Typography>
          </ListItem>
          <ListItem dense>
            <ListItemIcon>
              <AccountBalanceOutlined sx={{ color: "#54BEED" }} />
            </ListItemIcon>
            <Typography level="body-sm">
              <Typography sx={{fontWeight: "600"}}>Bank Loan Data Interactive Dashboard:</Typography>
              <List sx={{ listStyleType: "disc", listStylePosition: "inside" }}>
                <ListItem sx={{ display: "list-item" }}>Developed a dashboard to streamline bank loan data presentation, resulting in improved user interaction and data accessibility.</ListItem>
                <ListItem sx={{ display: "list-item" }}>Designed data pipelines to address bottlenecks in data refresh cycles and delivered real-time data updates to users.</ListItem>
              </List>
            </Typography>
          </ListItem>
          <ListItem dense>
            <ListItemIcon>
              <MilitaryTechOutlined sx={{ color: "#1C2429" }} />
            </ListItemIcon>
            <Typography level="body-sm">
              <Typography sx={{fontWeight: "600"}}>Government Contract:</Typography>
              <List sx={{ listStyleType: "disc", listStylePosition: "inside" }}>
                <ListItem sx={{ display: "list-item" }}>Rapidly digested and implemented Apache NiFi best practices leading to a more compact development experience and over 100 times faster data processing.</ListItem>
                <ListItem sx={{ display: "list-item" }}>Architected custom Python tool to automate pipeline component configurations, reducing manual intervention to zero.</ListItem>
                <ListItem sx={{ display: "list-item" }}>Worked closely with clients to develop a highly normalized Postgres data model, incorporating dozens of sources.</ListItem>
              </List>
            </Typography>
          </ListItem>
          <ListItem dense>
            <ListItemIcon>
              <FlightTakeoffOutlined sx={{ color: "#427bff" }} />
            </ListItemIcon>
            <Typography level="body-sm">
              <Typography sx={{fontWeight: "600"}}>Travel Rewards Application:</Typography>
              <List sx={{ listStyleType: "disc", listStylePosition: "inside" }}>
                <ListItem sx={{ display: "list-item" }}>Led a team of 3 engineers, mentoring them on Angular best practices</ListItem>
                <ListItem sx={{ display: "list-item" }}>Developed a chrome extension to interact with a travel booking site, gamifying the experience saving on business travel for increased user engagement.</ListItem>
              </List>
            </Typography>
          </ListItem>
        </List>
        <Typography sx={{ display: 'flex', textAlign: 'left' }}>
          Software Engineer:
          <span style={{ display: 'flex', paddingLeft: '5px', textAlign: 'left' }}>Pacific Controls Inc</span>
        </Typography>
        <Typography sx={{ display: 'flex' }}>July 2013 - October 2016</Typography>
        <Typography level="body-sm" sx={{ display: 'flex', fontWeight: 300, textAlign: 'left' }}>
          Facilitated clients in uncovering hidden energy inefficiencies and saving notable costs by offering 
          analytics solutions using Java.
        </Typography>
        <List>
          <ListItem dense>
            <ListItemIcon>
              <SavingsOutlined sx={{ color: "#1C2429" }} />
            </ListItemIcon>
            <Typography level="body-sm">
              Engineered a comprehensive system employing innovative applied mathematics to quantify energy waste
              and assign precise dollar amounts to client tickets, demonstrating the value of our product to stakeholders.
            </Typography>
          </ListItem>
          <ListItem dense>
            <ListItemIcon>
              <InsightsOutlined sx={{ color: "#1C2429" }} />
            </ListItemIcon>
            <Typography level="body-sm">
              Introduced a predictive analytics model using Java to identify, categorize, and address potential maintenance issues.
            </Typography>
          </ListItem>
          <ListItem dense>
            <ListItemIcon>
              <PieChartOutlineOutlined sx={{ color: "#1C2429" }} />
            </ListItemIcon>
            <Typography level="body-sm">
              Designed data visualizations with AngularJS to customize dashboards and manage the data in a case-specific manner.
            </Typography>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}