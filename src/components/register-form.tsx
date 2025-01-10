"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { registerSchema, RegisterFormData } from "@/schemas/register-schema";
import { useRegisterUser } from "@/services/registerUser";
import { Link, useNavigate } from "react-router-dom";
import { UserResponse } from "@/types/request/user";
import { ApiResponse } from "@/lib/helper";
import { useToast } from "@/hooks/use-toast";
import { AxiosError } from "axios";

export default function RegisterForm() {
  // const [serverError, setServerError] = useState("");
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { toast } = useToast();
  const { mutate } = useRegisterUser();

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

   const onSubmit = async (data: RegisterFormData) => {
    setIsLoading(true);

    const result = registerSchema.safeParse(data);

    if (result.success) {
      mutate(data, {
        onSuccess: (response: ApiResponse<UserResponse>) => {
          setIsLoading(false);
          console.log(response);
          if (response.status === "success") {
            navigate("/");
            toast({
              title: "Success",
              description:
                "Your account is pending activation by an administrator. You'll be notified once it's activated.",
            });
          } else {
            setErrorMessage(
              (response.error?.response?.data as { email?: string })?.email ??
                ""
            );
          }
        },
        onError: (error) => {
          setIsLoading(false);
          console.log(error);
          if (error instanceof AxiosError) {
            setErrorMessage(error.response?.data?.email);
          } else {
            setErrorMessage("An unexpected error occurred 2");
          }
        },
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-[500px] shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Create an account
          </CardTitle>
          <CardDescription className="text-center">
            Enter your information to register
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label htmlFor="employeeId">Employee ID</Label>
                <Input
                  id="employeeId"
                  placeholder="Enter Employee ID"
                  {...register("employee_id", {
                    required: "Employee ID is required",
                  })}
                />
                {errors.employee_id && (
                  <p className="text-sm text-red-500">
                    {errors.employee_id.message}
                  </p>
                )}
              </div>
              <div className="space-y-1">
                <Label htmlFor="role">Role</Label>
                <Select
                  onValueChange={(value) =>
                    setValue("role", value as "User" | "Admin")
                  }
                >
                  <SelectTrigger id="role">
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="User">User</SelectItem>
                    <SelectItem value="Admin">Admin</SelectItem>
                  </SelectContent>
                </Select>
                {errors.role && (
                  <p className="text-sm text-red-500">{errors.role.message}</p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  placeholder="Enter first name"
                  {...register("first_name", {
                    required: "First name is required",
                  })}
                />
                {errors.first_name && (
                  <p className="text-sm text-red-500">
                    {errors.first_name.message}
                  </p>
                )}
              </div>
              <div className="space-y-1">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  placeholder="Enter last name"
                  {...register("last_name", {
                    required: "Last name is required",
                  })}
                />
                {errors.last_name && (
                  <p className="text-sm text-red-500">
                    {errors.last_name.message}
                  </p>
                )}
              </div>
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                {errors.password && (
                  <p className="text-sm text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div className="space-y-1">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm password"
                  {...register("password2", {
                    required: "Please confirm your password",
                  })}
                />
                {errors.password2 && (
                  <p className="text-sm text-red-500">
                    {errors.password2.message}
                  </p>
                )}
              </div>
            </div>
            {errorMessage && (
              <Alert variant={"destructive"}>
                <AlertDescription>
                  <p className="text-red-500">{errorMessage}</p>
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button className="w-full" type="submit" disabled={isLoading}>
              {isLoading ? (<Loader2 className="animate-spin"/>) : "Register"}
            </Button>
            <p className="text-sm text-center text-gray-600">
              Already have an account?{" "}
              <Link to="/" className="text-primary hover:underline">
                Login
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
