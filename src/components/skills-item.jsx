export const SkillsItem = ({icon, title}) => {
  return (
    <li className="flex items-center gap-2"><span>{icon}</span> - {title}</li>
  );
};