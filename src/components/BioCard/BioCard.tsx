import Avatar from '@mui/joy/Avatar';
import Grid from '@mui/joy/Grid';
import Card from '@mui/joy/Card';
import CardContent  from "@mui/joy/CardContent";
import Link from '@mui/material/Link';
import Typography from '@mui/joy/Typography';
import headShot from '../../assets/test-shot2.png';
import li from '../../assets/skills-logos/linkedin.svg';
import gh from '../../assets/skills-logos/git-user.svg';

export default function BioCard() {
    return (
      <Card
        sx={{
          maxWidth: '100%',
          boxShadow: 'lg',
        }}
      >
        <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>
          <Avatar src={headShot} sx={{ '--Avatar-size': '20vw' }} />
          <Typography level="title-lg">Brian Buccellato</Typography>
          <Typography level="body-sm">
            Engineering professional with 10+ years of experience leading technical teams and driving 
            technological advancements within diverse sectors. Architected innovative solutions and 
            streamlined business operations through expert knowledge of ETL processes, data integrity, 
            and predictive analytics. Spearheaded successful projects that enhanced data accessibility 
            and improved operational efficiency. Leveraged cutting-edge technologies to optimize 
            workflows and empower team growth in a fast-paced environment.  Away from work, I am passionate 
            about creating music, playing drums, music production, and spending time with my family.   
          </Typography>
          <Grid sx={{ display: "flex", flexDirection: "row" }}>
            <Link href="https://www.linkedin.com/in/brian-buccellato-a36bb5ba/" target="_blank">
              <Avatar src={li} sx={{ width: '28px', height: '28px', margin: '5px' }} />
            </Link>
            <Link href="https://github.com/brian-buccellato" target="_blank">
              <Avatar src={gh} sx={{ width: '28px', height: '28px', margin: '5px'}} />
            </Link>
          </Grid>
        </CardContent>
      </Card>
    );
  }