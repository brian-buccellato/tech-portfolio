import Card from '@mui/joy/Card';
import CardContent from "@mui/joy/CardContent";
import { Grid } from '@mui/material';
import Typography from '@mui/joy/Typography';
import { ProjectDetails } from '../../types/ProjectDetails';
import SkillItem from '../SkillItem/SkillItem';
import { useMediaQuery } from '@mui/material';
import SvgIcon from '@mui/joy/SvgIcon';
import Link from '@mui/material/Link';

// languages
import sql from '../../assets/skills-logos/db.svg';
import python from '../../assets/skills-logos/python.svg';
import terraform from '../../assets/skills-logos/terraform.svg';
import react from '../../assets/skills-logos/react.svg';
import ts from '../../assets/skills-logos/ts.svg';
import mui from '../../assets/skills-logos/materialui.svg';

// orchestration
import docker from '../../assets/skills-logos/docker.svg';
import actions from '../../assets/skills-logos/actions.svg';

// data platforms
import redshift from '../../assets/skills-logos/redshift.svg';

// etl
import dbt from '../../assets/skills-logos/dbt.svg';

//aws
import ecs from '../../assets/skills-logos/ecs.svg';
import ecr from '../../assets/skills-logos/ecr.svg';
import s3 from '../../assets/skills-logos/s3.svg';
import sm from '../../assets/skills-logos/secretsmanager.svg';
import mwaa from  '../../assets/skills-logos/mwaa.svg';
import cf from '../../assets/skills-logos/cloudfront.svg';
import r53 from '../../assets/skills-logos/routefiftythree.svg';



export default function ProjectCard() {
  const projects: ProjectDetails[] = [
    {
      name: 'Python + DBT on AWS: Data Engineering Template Repo',
      description: `This repository is a template for ELT 
      data engineering projects on AWS.  It includes all of 
      the terraform code needed create the following:  A VPC, 
      Redshift cluster in a private subnet accessible through 
      bastion host, an S3 bucket for staging loads, python and 
      DBT tasks on ECS, ECR repositories, all necessary secrets, and IAM roles and 
      policies to get started building quickly and efficiently.
      Automated builds and deployments are handled through
      github actions.  I've left the workflow management mostly up to the user, 
      but I've most often used AWS managed airflow.  By leaving the 
      management only to airflow and keeping the tasks as ECS on 
      fargate I have a simple solution that scales pretty well in the
      cloud while also allowing for local testing and development.  
      I built this repository because it's a solution that I wished I 
      had on a number of projects.  I've successfully implemented 
      such a solution on a handful of projects to date.`,
      skills: [
        {name: 'Python', icon: python},
        {name: 'SQL', icon: sql},
        {name: 'Dbt Core', icon: dbt},
        {name: 'Terraform', icon: terraform},
        {name: 'Elastic Container Service (ECS)', icon: ecs},
        {name: 'Elastic Container Registry (ECR)', icon: ecr},
        {name: 'AWS Secrets Manager', icon: sm},
        {name: 'Redshift', icon: redshift},
        {name: 'Simple Storage Service (S3)', icon: s3},
        {name: 'Docker', icon: docker},
        {name: 'Github Actions', icon: actions},
        {name: 'Managed Workflows for Apache Airflow (MWAA)', icon: mwaa}
      ],
      link: 'https://github.com/brian-buccellato/dbt-python-aws-data-engineering-template',
    },
    {
      name: 'This Portfolio Site',
      description: `This site is a portfolio project built with React and Material-UI.  Although it is a static site and didn't require React, I wanted to use it as a gentle reintroduction to the framework as I've been mainly on backend and data engineering projects for the past few years.  It is served from AWS cloudfront assets stored in S3.  Deployments are automated through github actions.  The site remains a work in progress and I'm excited to add some new features such as user action tracking via GTM as well as showcase some new projects in the near future.`,
      skills: [
        {name: 'React', icon: react},
        {name: 'TypeScript', icon: ts},
        {name: 'Material UI', icon: mui},
        {name: 'AWS Cloudfront', icon: cf},
        {name: 'Simple Storage Service (S3)', icon: s3},
        {name: 'Route 53', icon: r53},
        {name: 'Github Actions', icon: actions},
      ],
      link: 'https://github.com/brian-buccellato/tech-portfolio',
    }
  ];
  const isMobile = useMediaQuery('(max-width: 600px)');

  return (
    projects.map((project, index) => (
      <Card 
        key={index} 
        sx={{
        maxWidth: '100%',
        boxShadow: 'lg',
        marginBottom: '8px'
      }}>
        <CardContent
          sx={{ alignItems: 'left', textAlign: 'left' }}>
          <Typography sx={{textAlign: 'center', marginBottom: '8px'}} level="h2">{project.name}</Typography>    
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography level="body-md">{project.description}</Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            {project.skills.map((skill, skillIndex) => (
              <Grid item xs={isMobile ? 6 : 4} key={skillIndex}>
                <SkillItem key={skill.name} {...skill} />
              </Grid>
          
            ))}
          </Grid>
          <Grid textAlign={"center"}>
            <Typography level="body-sm">Visit Project</Typography>
            <Link href={project.link} target="_blank">
                <SvgIcon size='lg'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                  <path fill="currrentColor" d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm3.163 21.783h-.093a.513.513 0 0 1-.382-.14.513.513 0 0 1-.14-.372v-1.406c.006-.467.01-.94.01-1.416a3.693 3.693 0 0 0-.151-1.028 1.832 1.832 0 0 0-.542-.875 8.014 8.014 0 0 0 2.038-.471 4.051 4.051 0 0 0 1.466-.964c.407-.427.71-.943.885-1.506a6.77 6.77 0 0 0 .3-2.13 4.138 4.138 0 0 0-.26-1.476 3.892 3.892 0 0 0-.795-1.284 2.81 2.81 0 0 0 .162-.582c.033-.2.05-.402.05-.604 0-.26-.03-.52-.09-.773a5.309 5.309 0 0 0-.221-.763.293.293 0 0 0-.111-.02h-.11c-.23.002-.456.04-.674.111a5.34 5.34 0 0 0-.703.26 6.503 6.503 0 0 0-.661.343c-.215.127-.405.249-.573.362a9.578 9.578 0 0 0-5.143 0 13.507 13.507 0 0 0-.572-.362 6.022 6.022 0 0 0-.672-.342 4.516 4.516 0 0 0-.705-.261 2.203 2.203 0 0 0-.662-.111h-.11a.29.29 0 0 0-.11.02 5.844 5.844 0 0 0-.23.763c-.054.254-.08.513-.081.773 0 .202.017.404.051.604.033.199.086.394.16.582A3.888 3.888 0 0 0 5.702 10a4.142 4.142 0 0 0-.263 1.476 6.871 6.871 0 0 0 .292 2.12c.181.563.483 1.08.884 1.516.415.422.915.75 1.466.964.653.25 1.337.41 2.033.476a1.828 1.828 0 0 0-.452.633 2.99 2.99 0 0 0-.2.744 2.754 2.754 0 0 1-1.175.27 1.788 1.788 0 0 1-1.065-.3 2.904 2.904 0 0 1-.752-.824 3.1 3.1 0 0 0-.292-.382 2.693 2.693 0 0 0-.372-.343 1.841 1.841 0 0 0-.432-.24 1.2 1.2 0 0 0-.481-.101c-.04.001-.08.005-.12.01a.649.649 0 0 0-.162.02.408.408 0 0 0-.13.06.116.116 0 0 0-.06.1.33.33 0 0 0 .14.242c.093.074.17.131.232.171l.03.021c.133.103.261.214.382.333.112.098.213.209.3.33.09.119.168.246.231.381.073.134.15.288.231.463.188.474.522.875.954 1.145.453.243.961.364 1.476.351.174 0 .349-.01.522-.03.172-.028.343-.057.515-.091v1.743a.5.5 0 0 1-.533.521h-.062a10.286 10.286 0 1 1 6.324 0v.005z"/>   
                  </svg>
                </SvgIcon>
            </Link>
          </Grid>
        </CardContent>
      </Card>
    ))
  );
}