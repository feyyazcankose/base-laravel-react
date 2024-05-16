import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";

export default function Dashboard({ auth }: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />
            <div className="p-6 text-gray-900">
                Merhaba {auth.user.name}, Splintern'e hoş geldin.
            </div>
            {/* <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg"></div>
            </div> */}
        </AuthenticatedLayout>
    );
}
