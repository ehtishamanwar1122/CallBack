'use client'
import { useCallback, useState } from "react";
import {Input} from "../Input";

type FormData = {
    email: string;
    password: string;
  };
const Form: React.FC = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
    const [formData, setFormData] = useState<FormData>({ email: "", password: "" });
    const [errors, setErrors] = useState<Partial<FormData>>({});
  
    const handleChange = useCallback((name: keyof FormData, value: string) => {
      setFormData((prev) => ({ ...prev, [name]: value }));
      console.log(formData)
    },[]);
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      let newErrors: Partial<FormData> = {};
      if (!formData.email) newErrors.email = "Email is required";
      if (!formData.password) newErrors.password = "Password is required";
      setErrors(newErrors);
  
      if (Object.keys(newErrors).length === 0) {
        console.log("Form submitted", formData);
      }
    };
  
    return (
      <form onSubmit={handleSubmit} className="w-full bg-amber-50 max-w-sm mt-[40vh] mx-auto p-4 border rounded-md">
        <Input
          label="Email"
          name="email"
          type="email"
          value={email}
          setValue={setEmail}
        />
        <Input
          label="Password"
          name="password"
          type="password"
          value={password}
          setValue={setPassword}
        />
        <button type="submit"  className="w-full mt-4 p-2 cursor-pointer bg-blue-500 text-white rounded-md">Submit</button>
      </form>
    );
  };
  
  export default Form;
  