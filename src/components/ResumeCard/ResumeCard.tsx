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
  AnalyticsOutlined,
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
          I've spent the majority of my engineering career at EV.  It's a cool, agile consulting shop
          specializing in digital transformation, MVP builds, and data driven decision making.  Though just
          one stop on my journey, I've had the opportunity to serve many clients of varying size in a variety
          of industries wearing many different hats.
        </Typography>
        <Typography level="body-md" sx={{ display: 'flex' }}>Highlighted Projects</Typography>
        <List>
          <ListItem dense>
            <ListItemIcon>
              <NewspaperOutlined sx={{ color: "#3b6be3" }} />
            </ListItemIcon>
            <Typography level="body-sm">
              News organization:  Spearheaded the development and maintenance of new ETL pipelines using Python and SQL,
              ensuring timely and accurate data flow for critical analytics.  Optimized Redshift data warehouse
              schema design, enhancing data accessibility and query performance.  Led a successful
              discovery initiative on leveraging tooling to group users and create email lists,
              eliminating the need for manual curation using Segment and Sailthru.  Leveraged agile expertise to advise directors
              on process improvements, leading to a 20% velocity increase.
            </Typography>
          </ListItem>
          <ListItem dense>
            <ListItemIcon>
              <PaletteOutlined sx={{ color: "#141414" }} />
            </ListItemIcon>
            <Typography level="body-sm">
              Art investment platform:  Developed and maintained library of Luigi/DBT batch ETL jobs in support of
              marketing team reporting.  Prioritized data integrity checks with Great Expectations throughout pipelines as well
              as observability with Cloudtrail/Grafana/Lambda/Slack leading to quicker issue diagnosis and timely delivery of mission critical
              reporting.  Led end to end implementation of custom marketing initiatives leveraging custom GTM events and Meta Pixel, enabling 
              more strategic re-targeting of potential investors.  Debugged and enhanced a legacy Puppeteer web scraping tool, automating 
              valuable insight into auction trends and pricing.  Leveraged Clarifai platform to build a custom python job allowing decision makers 
              to see which pieces of available art might be most similar to those which have generated the most profit in the past. 
            </Typography>
          </ListItem>
          <ListItem dense>
            <ListItemIcon>
              <LocalHospitalOutlined sx={{ color: "#051c2c" }} />
            </ListItemIcon>
            <Typography level="body-sm">
              Healthcare analytics:  Rapidly prototyped data integrity verification application, saving
              hundreds of hours by preventing long-running jobs from failing due to corrupt schema.
              Built a tool to generate "slice" of Dev DB, enabling faster testing and streamlining development
              workflows.  Operationalized existing Machine Learning models through PySpark ETL pipeline development,
              improving data utilization for decision-making.
            </Typography>
          </ListItem>
          <ListItem dense>
            <ListItemIcon>
              <AccountBalanceOutlined sx={{ color: "#54BEED" }} />
            </ListItemIcon>
            <Typography level="body-sm">
              Bank loan data interactive dashboard tech lead:  Led the creation of an interactive
              React/D3 dashboard for bank loan data, enhancing user engagement and data accessibility.
              Designed data pipelines to facilitate more frequent data refresh, providing users with
              up-to-date information.
            </Typography>
          </ListItem>
          <ListItem dense>
            <ListItemIcon>
              <MilitaryTechOutlined sx={{ color: "#1C2429" }} />
            </ListItemIcon>
            <Typography level="body-sm">
              Government contract:  Joined in progress project aimed at creating a centralized super dataset of all government contractors, 
              quickly becoming defacto tech lead.  Worked closely with clients to develop a highly normalized Postgres data model.  Rapidly 
              digested and implemented best practices for deploying pipelines using Apache NiFi, leading to a greater development experience 
              and higher volumed of data processed.  Developed a custom Python tool to automate pipeline component configurations, reducing the 
              time spent by engineers doing manual configurations to zero.  Rapidly deployed a Postgraphile API to interface with the dataset allowing 
              the team to answer questions about the data in real time during demos. 
            </Typography>
          </ListItem>
          <ListItem dense>
            <ListItemIcon>
              <FlightTakeoffOutlined sx={{ color: "#427bff" }} />
            </ListItemIcon>
            <Typography level="body-sm">
              Travel rewards application tech lead:  Led a team of 2-3 engineers to deliver the MVP of an application
              designing to incentivize employees to save on travel expenses.  Mentored team members on Angular best practices, 
              quickly migrated from a legacy Django backend to Node/Express resulting in a drastic reduction in page load times.  Built a 
              chrome extension which interacted with a popular travel booking site, gamifying the experience of saving 
              on travel for increased user engagement.
            </Typography>
          </ListItem>
        </List>
        <Typography sx={{ display: 'flex', textAlign: 'left' }}>
          Software Engineer:
          <span style={{ display: 'flex', paddingLeft: '5px', textAlign: 'left' }}>Pacific Controls Inc</span>
        </Typography>
        <Typography sx={{ display: 'flex' }}>July 2013 - October 2016</Typography>
        <Typography level="body-sm" sx={{ display: 'flex', fontWeight: 300, textAlign: 'left' }}>
          This was my first stop out of college.  I was part of a small team of 3-4 engineers working on an IoT
          platform aimed at providing real-time data and analytics on HVAC systems to large industrial clients.
        </Typography>
        <List>
          <ListItem dense>
            <ListItemIcon>
              <AnalyticsOutlined sx={{ color: "#1C2429" }} />
            </ListItemIcon>
            <Typography level="body-sm">
              Conceived and developed new analytics using Java resulting in clients saving money on previously hidden
              energy waste.
            </Typography>
          </ListItem>
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
              Prototyped our first set of predictive analytics using Java allowing clients to investigate potential maintenance 
              issues before they became critical.
            </Typography>
          </ListItem>
          <ListItem dense>
            <ListItemIcon>
              <PieChartOutlineOutlined sx={{ color: "#1C2429" }} />
            </ListItemIcon>
            <Typography level="body-sm">
              Developed custom data visualizations using AngularJS, allowing clients to configure their own dashboards and interact 
              with their data in a manor tailored to their specific needs. 
            </Typography>
          </ListItem>
        </List>

      </CardContent>
    </Card>
  );
}