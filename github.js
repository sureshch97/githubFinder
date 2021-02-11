class Github{
 
    constructor(){
         
        this.client_id ='3986e2bfee0396982cb6';
        this.client_secret='b3f56267bfeaae4ddd78916c56ef383eadbc5b01';
        this.repos_count = 5;
        this.repos_sort = 'created:asc';

    }

    async getUser (user)
    {
        
    const profileResponce = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const repoResponce = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const profile = await profileResponce.json(); 
    const repos = await repoResponce.json();
       
        return{
            profile,
            repos
        }
    }
}
