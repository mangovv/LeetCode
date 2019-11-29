class Solution {
    public String mostCommonWord(String paragraph, String[] banned) {
        String  para = paragraph.toLowerCase().replaceAll("[^a-z]"," ");
        Set<String> set  = new HashSet<>();
        for(String s : banned) set.add(s);
        Map<String, Integer> map = new HashMap<>();
        
        int count = 0;
        String ans = "";
        for(String s : para.split(" ")){
            if(s.length() == 0 || set.contains(s)) continue;
            map.put(s, map.getOrDefault(s , 0) + 1);
            if(count < map.get(s)){
                ans = s;
                count = map.get(s);
            }
        }
        return ans;
    }
}