import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InputesType } from "@/types/types";

export function SkillNameInput({
  type = "text",
  label,
  value,
  onChange,
  placeholder
}: InputesType) {
  return (
    <div className="grid w-full max-w-sm items-center gap-3">
      <Label htmlFor="name">{label}</Label>
      <Input
        id="name"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="bg-gray-100"
      />
    </div>
  );
}
