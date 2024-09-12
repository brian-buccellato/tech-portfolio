import Card from '@mui/joy/Card';
import CardContent from "@mui/joy/CardContent";
import Typography from '@mui/joy/Typography';
import { Grid, useMediaQuery } from '@mui/material';
import { Skill } from "../../types/Skill";
import SkillItem from "../SkillItem/SkillItem";

// languages
import sql from '../../assets/skills-logos/db.svg';
import python from '../../assets/skills-logos/python.svg';
import terraform from '../../assets/skills-logos/terraform.svg';
import bash from '../../assets/skills-logos/bash.svg';
import js from '../../assets/skills-logos/js.svg';

// orchestration
import docker from '../../assets/skills-logos/docker.svg';
import git from '../../assets/skills-logos/git.svg';
import actions from '../../assets/skills-logos/actions.svg';

// data platforms
import jupyter from '../../assets/skills-logos/jupyter.svg';
import spark from '../../assets/skills-logos/spark.svg';
import redshift from '../../assets/skills-logos/redshift.svg';
import postgres from '../../assets/skills-logos/postgres.svg';
import glue from '../../assets/skills-logos/glue.svg';

// etl
import dbt from '../../assets/skills-logos/dbt.svg';
import nifi from '../../assets/skills-logos/nifi.svg';
import luigi from '../../assets/skills-logos/luigi.webp';

//aws
import ecs from '../../assets/skills-logos/ecs.svg';
import eks from '../../assets/skills-logos/eks.svg';
import lambda from '../../assets/skills-logos/lambda.svg';
import rds from '../../assets/skills-logos/rds.svg';
import s3 from '../../assets/skills-logos/s3.svg';
import steps from '../../assets/skills-logos/stepfunctions.svg';
import athena from '../../assets/skills-logos/athena.svg';

// marketing
import gtm from '../../assets/skills-logos/gtm.svg';
import segment from '../../assets/skills-logos/segment.svg';



function chunkArray<T>(arr: T[], chunkSize: number): T[][] {
  return arr.reduce((result: T[][], item, index) => {
    const chunkIndex = Math.floor(index / chunkSize);
    if (!result[chunkIndex]) {
      result[chunkIndex] = []; // Start a new chunk
    }
    result[chunkIndex].push(item);
    return result;
  }, []);
}

export default function SkillsCard() {
  const languages: Skill[] = [
    { icon: python, name: 'Python' },
    { icon: sql, name: 'SQL' },
    { icon: terraform, name: 'Terraform' }, 
    { icon: bash, name: 'Bash' },
    { icon: js, name: 'JavaScript' },
  ];
  const platforms: Skill[] = [
    { icon: spark, name: 'PySpark' },
    { icon: redshift, name: 'Redshift' },
    { icon: postgres, name: 'PostgreSQL' },
    { icon: glue, name: 'Glue' },
    { icon: jupyter, name: 'Jupyter' },  
  ];
  const etl: Skill[] = [
    { icon: dbt, name: 'Dbt Core' },
    { icon: luigi, name: 'Luigi' },
    { icon: nifi, name: 'NiFi' },
  ];
  const awsClouds: Skill[] = [
    { icon: ecs, name: 'Elastic Container Service (ECS)' },
    { icon: eks, name: 'Elastic Kubernetes Service (EKS)' },
    { icon: lambda, name: 'Lambda' },
    { icon: rds, name: 'Relational Database Service (RDS)' },
    { icon: s3, name: 'Simple Storage Service (S3)' },
    { icon: steps, name: 'Step Functions' },
    { icon: athena, name: 'Athena' },
  ];
  const orchestration: Skill[] = [
    { icon: git, name: 'Git' },
    { icon: actions, name: 'GitHub Actions' },
    { icon: docker, name: 'Docker' },
  ]; 
  const marketing: Skill[] = [
    { icon: gtm, name: 'Google Tag Manager' },
    { icon: segment, name: 'Segment' },
  ];

  const isMobile = useMediaQuery('(max-width: 600px)'); // Adjust breakpoint as needed
  const chunkedLanguages = chunkArray(languages, isMobile ? 2 : 3); // Divide skills into chunks of 2 or 3
  const chunkedPlatforms = chunkArray(platforms, isMobile ? 2 : 3);
  const chunkedEtl = chunkArray(etl, isMobile ? 2 : 3);
  const chunkedAwsClouds = chunkArray(awsClouds, isMobile ? 2 : 3);
  const chunkedOrchestration = chunkArray(orchestration, isMobile ? 2 : 3);
  const chunkedMarketing = chunkArray(marketing, isMobile ? 2 : 3);

  return (
    <Card sx={{
      maxWidth: '100%',
      boxShadow: 'lg',
      minHeight: '600px'
    }}>
      <CardContent
        sx={{ alignItems: 'left', textAlign: 'left' }}>
        <Typography sx={{textAlign: 'center'}} level="h2">Professional Skills</Typography>    
        <Grid container>
          <Typography level="h4" sx={{marginBottom: '5px'}}>Languages</Typography>
          {chunkedLanguages.map((row, rowIndex) => (
            <Grid container key={rowIndex}>
              {row.map((skill, skillIndex) => (
                <Grid item xs={isMobile ? 6 : 4} key={skillIndex}>
                  <SkillItem key={skill.name} {...skill} />
                </Grid>
              ))}
            </Grid>
          ))}
          <Typography level="h4" sx={{marginBottom: '5px'}}>Data Platforms</Typography>
          {chunkedPlatforms.map((row, rowIndex) => (
            <Grid container key={rowIndex} sx={{marginBottom: '5px'}}>
              {row.map((skill, skillIndex) => (
                <Grid item xs={isMobile ? 6 : 4} key={skillIndex}>
                  <SkillItem key={skill.name} {...skill} />
                </Grid>
              ))}
            </Grid>
          ))}
          <Typography level="h4" sx={{marginBottom: '5px'}}>ETL + ELT</Typography>
          {chunkedEtl.map((row, rowIndex) => (
            <Grid container key={rowIndex} sx={{marginBottom: '5px'}}>
              {row.map((skill, skillIndex) => (
                <Grid item xs={isMobile ? 6 : 4} key={skillIndex}>
                  <SkillItem key={skill.name} {...skill} />
                </Grid>
              ))}
            </Grid>
          ))}
          <Typography level="h4" sx={{marginBottom: '5px'}}>AWS Cloud</Typography>
          {chunkedAwsClouds.map((row, rowIndex) => (
            <Grid container key={rowIndex} sx={{marginBottom: '5px'}}>
              {row.map((skill, skillIndex) => (
                <Grid item xs={isMobile ? 6 : 4} key={skillIndex}>
                  <SkillItem key={skill.name} {...skill} />
                </Grid>
              ))}
            </Grid>
          ))}
          <Typography level="h4" sx={{marginBottom: '5px'}}>Orchestration and CI/CD</Typography>
          {chunkedOrchestration.map((row, rowIndex) => (
            <Grid container key={rowIndex} sx={{marginBottom: '5px'}}>
              {row.map((skill, skillIndex) => (
                <Grid item xs={isMobile ? 6 : 4} key={skillIndex}>
                  <SkillItem key={skill.name} {...skill} />
                </Grid>
              ))}
            </Grid>
          ))}
          <Typography level="h4" sx={{marginBottom: '5px'}}>Marketing</Typography>
          {chunkedMarketing.map((row, rowIndex) => (
            <Grid container key={rowIndex} sx={{marginBottom: '5px'}}>
              {row.map((skill, skillIndex) => (
                <Grid item xs={isMobile ? 6 : 4} key={skillIndex}>
                  <SkillItem key={skill.name} {...skill} />
                </Grid>
              ))}
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}