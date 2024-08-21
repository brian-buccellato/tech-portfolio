import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent  from "@mui/joy/CardContent";
import SkillItem from "../SkillItem/SkillItem";
import { Skill } from "../../types/Skill";



export default function SkillsCard() {
  const skills: Skill[] = [
    {icon: '/src/assets/logo.svg', name: 'Test'},
    {icon: '/src/assets/logo.svg', name: 'Test2'},
  ]  
  return (
    <Card sx={{
      maxWidth: '100%',
      boxShadow: 'lg',
      minHeight: '600px'
    }}>
      <CardContent>
          <Box>
            {skills.map((skill) => (
                <SkillItem key={skill.name} {...skill} />
            ))}
          </Box>
      </CardContent>
    </Card>
  );
}