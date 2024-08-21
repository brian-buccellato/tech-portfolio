import Avatar from '@mui/material/Avatar';
import { Skill } from '../../types/Skill';

import { ListItem, ListItemAvatar, ListItemText } from '@mui/material';

export default function SkillItem(skill: Skill) {
  return (

    <ListItem>
      <>
        <ListItemAvatar>
          <Avatar src={skill.icon} sx={{ width: '50px', height: '50px' }} />
        </ListItemAvatar>
        <ListItemText>{skill.name}</ListItemText>
      </>
    </ListItem>
  );
}
