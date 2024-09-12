import BioCard from "../../components/BioCard/BioCard";
import SkillsCard from "../../components/SkillsCard/SkillsCard";
import Grid from "@mui/joy/Grid";
import ResumeCard from "../../components/ResumeCard/ResumeCard";
import './About.css';

export default function About() {
  return (
    <section className="section-container">
        <Grid container spacing={1} sx={{ display: "flex", flexDirection: {xs: "column", md: "row" }}} >
          <Grid rowSpacing={2} xs={12} md={4} sx={{display: "flex", flex: 1}} >
            <BioCard />
          </Grid>
          <Grid rowSpacing={2} xs={12} md={8} sx={{display: "flex", flex: 1}}>
            <SkillsCard />
          </Grid>
          <Grid rowSpacing={2} xs={12} md={12}>
            <ResumeCard />
          </Grid>    
        </Grid>
    </section>
  );
}