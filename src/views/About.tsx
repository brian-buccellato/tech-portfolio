import BioCard from "../components/BioCard/BioCard";
import SkillsCard from "../components/SkillsCard/SkillsCard";
import Grid from "@mui/joy/Grid";
import './About.css';


export default function About() {
  return (
    <section className={"section-container"}>
        <Grid container spacing={1} sx={{flexGrow: 1 }}>
          <Grid rowSpacing={2} xs={6} md={4}>
            <BioCard />
          </Grid>
          <Grid rowSpacing={2} xs={6} md={8}>
            <SkillsCard />
          </Grid>    
        </Grid>
    </section>
  );
}