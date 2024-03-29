"use client";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { ChevronRight, Save, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export default function page() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { isLoaded, isSignedIn, user } = useUser();

  const onSubmit = (data) => {
    try {
      setIsLoading(true);
      user.update({
        lastName: data.lastName,
      });
      setIsDialogOpen(false);
    } catch (error) {
      toast.error("Ce champ est obligatoire");
      console.log(error);
    } finally {
      setIsLoading(false);
      toast.success("Votre nom est modifié avec succès");
    }
  };

  const handleOpenChange = (isOpen) => {
    setIsDialogOpen(isOpen);
  };

  const handleOpen = () => setIsDialogOpen(true);

  if (!isLoaded) {
    return null;
  }

  if (isSignedIn && user && user.fullName) {
    return (
      <Dialog open={isDialogOpen} onOpenChange={handleOpenChange}>
        <DialogTrigger asChild>
          <Button
            onClick={handleOpen}
            variant="ghost"
            className="gap-2 text-home_secondary
             hover:bg-home_secondary hover:text-white"
          >
            <ChevronRight size="16" />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogTitle>Changer votre nom</DialogTitle>
              <DialogDescription className="mt-3">
                Mettre à jour le nom
              </DialogDescription>
            </DialogHeader>
            <div>
              <label className="block mb-2 mt-3">Nom</label>
              <Input
                type="text"
                placeholder="Nouveau nom"
                {...register("lastName", {
                  required: true,
                })}
              />
              {errors.lastName && (
                <span className="text-sm text-red-600 mt-2">
                  Ce champ est obligatoire
                </span>
              )}
            </div>
            <DialogFooter>
              <Button
                disabled={isLoading}
                type="submit"
                className="mt-4 gap-2 bg-home_secondary
               hover:bg-home_secondary hover:opacity-90"
              >
                {isLoading ? (
                  <Loader2 size="16" className="animate-spin" />
                ) : (
                  <Save size="16" />
                )}
                Modifier
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    );
  }
}
