import Avatar from '@mui/material/Avatar';
import Typography from '@mui/joy/Typography';
import  { Skill } from '../../types/Skill';
import { Box } from '@mui/joy';

export default function SkillItem(skill: Skill) {
  return (
    <Box>
      <Avatar src={skill.icon} sx={{ width: '50px', height: '50px' }} />
      <Typography level="body-sm">{skill.name}</Typography>
    </Box>
  );
}
