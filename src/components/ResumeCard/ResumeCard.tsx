import { Card } from "@mui/joy";
import { CardContent } from "@mui/joy";
import { Typography } from "@mui/joy";
import { List, ListItem, ListItemIcon } from "@mui/material";
import { Favorite } from "@mui/icons-material";


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
              <Favorite sx={{color: "red"}} />
            </ListItemIcon>
              <Typography level="body-sm">
                News organization:  Spearheaded the development and maintenance of new ETL pipelines, 
                ensuring timely and accurate data flow for critical analytics.  Optimized data warehouse 
                schema design, enhancing data accessibility and query performance.  Led a successful 
                discovery initiative on leveraging tooling to group users and create email lists, 
                eliminating the need for manual curation.  Leveraged agile expertise to advise directors 
                on process improvements, leading to a 20% velocity increase.
              </Typography>
          </ListItem>
          <ListItem dense>
            <ListItemIcon>
              <Favorite sx={{color: "red"}} />
            </ListItemIcon>
              <Typography level="body-sm">
                Art investment platform:  Developed and maintained library of batch ETL jobs in support of 
                marketing team reporting.  Championed data integrity checks throughout pipelines as well 
                as observability leading to quicker issue diagnosis and timely delivery of mission critical 
                reporting.  Led end to end implementation of custom marketing initiatives.
              </Typography>
          </ListItem>
          <ListItem dense>
            <ListItemIcon>
              <Favorite sx={{color: "red"}} />
            </ListItemIcon>
              <Typography level="body-sm">
                Healthcare analytics:  Rapidly prototyped data integrity verification application, saving 
                hundreds of hours by preventing long-running jobs from failing due to corrupt schema.  
                Built a tool to generate "slice" of Dev DB, enabling faster testing and streamlining development 
                workflows.  Operationalized existing Machine Learning models through ETL pipeline development, 
                improving data utilization for decision-making. 
              </Typography>
          </ListItem>
          <ListItem dense>
            <ListItemIcon>
              <Favorite sx={{color: "red"}} />
            </ListItemIcon>
              <Typography level="body-sm">
                Bank loan data interactive dashboard tech lead:  Championed the creation of an interactive 
                dashboard for bank loan data, enhancing user engagement and data accessibility.  
                Designed data pipelines to facilitate more frequent data refresh, providing users with 
                up-to-date information. 
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
              <Favorite sx={{color: "red"}} />
            </ListItemIcon>
              <Typography level="body-sm">
                Conceived and developed new analytics resulting in clients saving money on previously hidden 
                energy waste.
              </Typography>
          </ListItem>
          <ListItem dense>
            <ListItemIcon>
              <Favorite sx={{color: "red"}} />
            </ListItemIcon>
              <Typography level="body-sm">
                Engineered a comprehensive system employing innovative applied mathematics to quantify energy waste 
                and assign precise dollar amounts to client tickets, demonstrating the value of our product to stakeholders.
              </Typography>
          </ListItem>
        </List>

      </CardContent>
    </Card>
  );
}