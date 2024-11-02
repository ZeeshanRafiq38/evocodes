import Link from "next/link";
import React from "react";

const Breadcrumbs = ({ crumbs }) => {
    return (
        <nav aria-label="breadcrumb" className="">
            <ol className="flex space-x-2 text-sm text-gray-300">
                {crumbs.map((crumb, index) => {
                    const isLast = index === crumbs.length - 1;
                    return (
                        <li key={crumb.id} className="flex items-center">
                            {!isLast ? (
                                <>
                                    <Link
                                        href={crumb.path}
                                        className="hover:text-pure transition-colors"
                                    >
                                        {crumb.label}
                                    </Link>
                                    <span className="mx-2">/</span>
                                </>
                            ) : (
                                <span className="text-primary">{crumb.label}</span>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
