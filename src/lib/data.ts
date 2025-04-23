export const fetchA = () =>
    new Promise((res) => setTimeout(() => res({ views: 3200 }), 800));
export const fetchB = () =>
    new Promise((res) => setTimeout(() => res([{ title: "Post A" }]), 1200));
export const fetchC = () =>
    new Promise((res) => setTimeout(() => res([{ page: "Home" }]), 1000));

export async function getDashboardData() {
    const useranalytics = await fetchA();
    const userpost = await fetchB();
    const userpages = await fetchC();

    return { useranalytics, userpost, userpages };
}