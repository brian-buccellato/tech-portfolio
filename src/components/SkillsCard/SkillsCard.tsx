
// import Card from '@mui/joy/Card';
// import CardContent from "@mui/joy/CardContent";
// import SkillItem from "../SkillItem/SkillItem";
// import { Skill } from "../../types/Skill";
// import { Grid } from '@mui/material';
// import Typography from '@mui/joy/Typography';


// export default function SkillsCard() {
//   const skills: Skill[] = [
//     { icon: '/src/assets/logo.svg', name: 'Test' },
//     { icon: '/src/assets/logo.svg', name: 'Test2' },
//   ]
//   return (
//     <Card sx={{
//       maxWidth: '100%',
//       boxShadow: 'lg',
//       minHeight: '600px'
//     }}>
//       <CardContent
//         sx={{ alignItems: 'left', textAlign: 'left' }}>
//         <Typography sx={{textAlign: 'center'}} level="title-lg">Technical Skills</Typography>    
//         <Grid container spacing={1}>

//           {skills.map((skill) => (
//             <SkillItem key={skill.name} {...skill} />
//           ))}
//         </Grid>
//       </CardContent>
//     </Card>
//   );
// }
import Card from '@mui/joy/Card';
import CardContent from "@mui/joy/CardContent";
import SkillItem from "../SkillItem/SkillItem";
import { Skill } from "../../types/Skill";
import { Grid } from '@mui/material';
import Typography from '@mui/joy/Typography';
import { useMediaQuery } from '@mui/material';

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
  const skills: Skill[] = [
    { icon: '/src/assets/logo.svg', name: 'Test' },
    { icon: '/src/assets/logo.svg', name: 'Test2' },
    { icon: '/src/assets/logo.svg', name: 'Test3' },
    { icon: '/src/assets/logo.svg', name: 'Test4' },
    { icon: '/src/assets/logo.svg', name: 'Test5' },
    { icon: '/src/assets/logo.svg', name: 'Test6' },
    { icon: '/src/assets/logo.svg', name: 'Test7' },
    { icon: '/src/assets/logo.svg', name: 'Test8' },
    { icon: '/src/assets/logo.svg', name: 'Test9' },
    { icon: '/src/assets/logo.svg', name: 'Test10' },
    // Add more skills here
  ];

  const isMobile = useMediaQuery('(max-width: 600px)'); // Adjust breakpoint as needed
  const chunkedSkills = chunkArray(skills, isMobile ? 2 : 3); // Divide skills into chunks of 2 or 3

  return (
    <Card sx={{
      maxWidth: '100%',
      boxShadow: 'lg',
      minHeight: '600px'
    }}>
      <CardContent
        sx={{ alignItems: 'left', textAlign: 'left' }}>
        <Typography sx={{textAlign: 'center'}} level="title-lg">Technical Skills</Typography>    
        <Grid container spacing={1}>
          {chunkedSkills.map((row, rowIndex) => (
            <Grid container spacing={1} key={rowIndex}>
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