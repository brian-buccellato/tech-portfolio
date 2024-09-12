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
            Pragmatic Data Engineer and Full Stack Web Developer with a proven track record of building and optimizing data pipelines to 
            drive business insights. Skilled in leveraging AWS cloud technologies, Python and SQL to 
            deliver scalable and reliable data solutions. Well experienced in collaboration with cross-functional 
            teams to deliver impactful data products.  Managerial and Technical leadership experience.  Away from work, I am passionate 
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