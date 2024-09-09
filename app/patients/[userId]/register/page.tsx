import Image from "next/image";
import React from "react";
import PatientForm from "@/components/forms/PatientForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import RegisterForm from "@/components/forms/RegisterForm";
import { getUser } from "@/lib/actions/patient.actions";
import * as Sentry from "@sentry/nextjs";

const Register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);
  Sentry.metrics.set("user_view_register", user.name);

  return (
    <div className="flex h-screen max-h-screen">
      <Image
        src="/assets/images/register-img.png"
        alt="Image 1"
        height={1000}
        width={1000}
        className="side-img max-w-[390px]"
      />
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <Image
            src="/assets/images/helio-logo.png"
            alt="Logo"
            height={1000}
            width={1000}
            className="mb-12 h-10 w-fit"
          />
          <RegisterForm user={user} />
          <p className="copyright py-12">© 2024 Helio</p>
        </div>
      </section>
    </div>
  );
};

export default Register;
