import { Difficulty } from "../../types";
import { SelectWrapper, Select, Label } from "./DifficultySelector.styles";
import { DifficultySelectorProps } from "../../types";

const DifficultySelector = ({
  difficulty,
  onChange,
  disabled = false,
}: DifficultySelectorProps) => {
  return (
    <SelectWrapper>
      <Label htmlFor="difficulty">Difficulty Level</Label>
      <Select
        id="difficulty"
        value={difficulty}
        onChange={(e) => onChange(Number(e.target.value) as Difficulty)}
        disabled={disabled}
      >
        <option value={Difficulty.EASY}>Easy (6 pairs)</option>
        <option value={Difficulty.MEDIUM}>Medium (8 pairs)</option>
        <option value={Difficulty.HARD}>Hard (12 pairs)</option>
      </Select>
    </SelectWrapper>
  );
};

export default DifficultySelector;
