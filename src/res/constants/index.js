export const STRIPE_TEST_PUBLIC_KEY = 'pk_test_51HUJiSH7ujdF5RBhcAhnssXPIL7yE8of7Uq9O351mOyDacNkk2g6G1MGA0WwAKdOpD45coqXIHoosNuWyUY3V4gs00bFxOfQwd';
export const STRIPE_PUBLIC_KEY = 'pk_live_51HUJiSH7ujdF5RBh0zJtvs5f13QDmvyQthHsnvBbyOPjrn558llsdN8C4IsqkHFF4Pls5ZSuUGqpqgO3wZ01NpyK00AnJBC9Ij';

export const UserRole = {
    SUPER_ADMIN: "Super Admin",
    CUSTOMER: "Customer",
    DRIVER: "Driver"
}

export const UserStatus = {
    PENDING: "Pending",
    ACTIVE: "Active",
    DELETED: "Deleted",
    INACTIVE: "Inactive"
}

export const JobStatus = {
    ACCEPTED: "Accepted",
    CALCELED: "Canceled",
    PROGRESS: "Progress",
    COMPLETED: "Completed"
}

export const JobType = {
    AIRPORT_TRANSFER: "Airport Transfer",
    POINT2POINT: "Point2Point",

}
export const PaymentType = {
    PREPAY: "Pre-pay",
    CREDIT: "Credit",
    MONTH_ARREAR: "Month Arrear"
}

export const PaymentStatus = {
    INACTIVE: "Inactive",
    PROCESS: "Process",
    FULL_PAID: "Full Paid",
    PARTIAL_PAID: "Partial Paid",
    CANCELD: "Canceled"
}

export const BookType = {
    ONE_TIME: "One Time Booking",
    REGULAR: "Bookinf from Registered"
}

export const PaymentMode = {
    ONE_WAY: "One Way",
    BY_HOUR: "By the hour"
}