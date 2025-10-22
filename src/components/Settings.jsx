// src/pages/Settings.jsx
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";

export default function Settings() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");




  const handleChangePassword = async (e) => {
  e.preventDefault();

  if (newPassword !== confirmPassword) {
    alert("New passwords do not match.");
    return;
  }

  if (!currentPassword || !newPassword) {
    alert("Please fill in all fields.");
    return;
  }

  try {
    const token = localStorage.getItem("token");
    const res = await axios.patch(
      "https://timewise-login-system-backend.onrender.com/api/update-password",
      {
        password: currentPassword,
        newPassword,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert(res.data.message || "Password changed successfully.");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  } catch (error) {
    console.error(error);
    alert(error.response?.data?.message || "Unable to change password");
  }
};

  return (
    <div className="max-w-lg mx-auto mt-10 space-y-8">

      
      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-xl font-semibold mb-2">Change Password</h2>
          <form onSubmit={handleChangePassword} className="space-y-4 ">
            <div>
              <Label>Current Password</Label>
              <Input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                required
                className= "focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <Label>New Password</Label>
              <Input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <Label>Confirm New Password</Label>
              <Input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Update Password
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
